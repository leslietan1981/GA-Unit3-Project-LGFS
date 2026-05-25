import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/auth.js";

// POST /api/auth/register
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ status: "error", message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "ok",
      message: "Registration successful",
      data: { id: newUser._id, username: newUser.username },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ status: "error", message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ status: "error", message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      status: "ok",
      message: "Login successful",
      data: { access: accessToken, refresh: refreshToken },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// POST /api/auth/refresh
const refresh = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(401).json({ status: "error", message: "Refresh token missing" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.REFRESH_SECRET);
    } catch (err) {
      return res.status(401).json({ status: "error", message: "Refresh token invalid or expired" });
    }

    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== token) {
      return res.status(401).json({ status: "error", message: "Refresh token not recognised" });
    }

    const newAccessToken = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({
      status: "ok",
      data: { access: newAccessToken },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// POST /api/auth/logout
const logout = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ status: "error", message: "Refresh token missing" });
    }

    const user = await User.findOne({ refreshToken: token });
    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.status(200).json({ status: "ok", message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export { register, login, refresh, logout };
