const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ status: "error", message: "Access denied: admins only" });
  }

  next();
};

export default isAdmin;
