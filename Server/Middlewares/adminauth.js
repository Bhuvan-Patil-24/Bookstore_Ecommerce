import jwt from "jsonwebtoken";

// Admin middleware for authentication
export const requireAdminAuth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
  
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      if (!decoded.isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
      }
  
      req.adminId = decoded._id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
  