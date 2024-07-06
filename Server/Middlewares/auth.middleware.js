import jwt from "jsonwebtoken";
import User from "../Models/user.js";

// Function to create a JWT token
export const createToken = (id, email) => {
  const token = jwt.sign(
    {
      id,
      email,
    },
    process.env.SECRET,
    {
      expiresIn: "2d", // Token expires in 2 days
    }
  );
  return token;
};

// Middleware to check if the user is authenticated
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from header
    if (!token) {
      return res.status(401).json({
        success: false,
        isLogin: false,
        message: "No token found",
      });
    }

    jwt.verify(token, process.env.SECRET, async (err, user) => {
      if (err) {
        return res.status(401).json({
          success: false,
          isLogin: false,
          message: "Invalid token",
        });
      }
      req.user = await User.findById(user.id);
      next();
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Middleware to check if the user has admin privileges
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Proceed if the user is an admin
  } else {
    res.status(403).json({
      success: false,
      message: "Forbidden: Admins only",
    });
  }
};

// Middleware to check if the user is authorized to access certain resources
export const isAuthorized = (req, res, next) => {
  const { userId } = req.params;
  if (req.user && (req.user._id.toString() === userId || req.user.role === 'admin')) {
    next(); // Proceed if the user is authorized
  } else {
    res.status(403).json({
      success: false,
      message: "Forbidden: Unauthorized access",
    });
  }
};
