import bcrypt from "bcrypt";
import User from "../models/auth.js";

// GET /api/users — admin only
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password -refreshToken");

    res.status(200).json({ status: "ok", data: users });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// PATCH /api/users/:id/promote — admin only
const promoteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    if (user.role === "admin") {
      return res.status(409).json({ status: "error", message: "User is already an admin" });
    }

    user.role = "admin";
    await user.save();

    res.status(200).json({ status: "ok", message: "User promoted to admin" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// PATCH /api/users/:id/revoke — admin only
const revokeUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    if (user.role === "user") {
      return res.status(409).json({ status: "error", message: "User is already a regular user" });
    }

    user.role = "user";
    await user.save();

    res.status(200).json({ status: "ok", message: "Admin rights revoked" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// DELETE /api/users/:id — admin only
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    if (req.user.id === req.params.id) {
      return res.status(403).json({ status: "error", message: "You cannot delete your own account" });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ status: "ok", message: "User deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// GET /api/users/me — own profile
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, "-password -refreshToken");
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    res.status(200).json({ status: "ok", data: user });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// PATCH /api/users/me — update own profile (displayName, profilePicture)
const updateMe = async (req, res) => {
  try {
    const updateDetails = {};

    if ("displayName" in req.body) updateDetails.displayName = req.body.displayName;
    if ("profilePicture" in req.body) updateDetails.profilePicture = req.body.profilePicture;

    if (Object.keys(updateDetails).length === 0) {
      return res.status(400).json({ status: "error", message: "No valid fields provided" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      updateDetails,
      { new: true, runValidators: true, select: "-password -refreshToken" }
    );

    res.status(200).json({ status: "ok", message: "Profile updated", data: updatedUser });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// PATCH /api/users/me/password — change own password
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ status: "error", message: "Current password is incorrect" });
    }

    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();

    res.status(200).json({ status: "ok", message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export { getAllUsers, promoteUser, revokeUser, deleteUser, getMe, updateMe, changePassword };
