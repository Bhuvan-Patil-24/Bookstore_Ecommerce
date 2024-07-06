import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Get all users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve users" });
    }
};

// Sign up a new user
export const signup = async (req, res, next) => {
    try {
        const { name, email, password, profileImg } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists." });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashPassword, profileImg });
        await user.save();

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Log in an existing user
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update profile image
export const updateProfileImage = async (req, res, next) => {
    try {
        const { email, profileImg } = req.body;
        const user = await User.findOneAndUpdate({ email }, { profileImg }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "Profile image updated successfully.", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Reset password
export const resetPassword = async (req, res, next) => {
    try {
        const { email, newPassword } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.status(200).json({ message: "Password updated successfully." });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add address to user
export const addUserAddress = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        const newAddress = req.body;
        userData.addresses.push(newAddress);
        await userData.save();

        res.status(201).json(newAddress);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update user address
export const updateUserAddress = async (req, res, next) => {
    try {
        const { userId, addressId } = req.params;
        const updatedAddress = req.body;

        const userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        const addressToUpdate = userData.addresses.id(addressId);

        if (!addressToUpdate) {
            return res.status(404).json({ message: "Address not found" });
        }

        addressToUpdate.set(updatedAddress);
        await userData.save();

        res.status(200).json(addressToUpdate);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Delete user address
export const deleteUserAddress = async (req, res) => {
    try {
        const { userId, addressId } = req.params;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const addressToDelete = user.addresses.id(addressId);

        if (!addressToDelete) {
            return res.status(404).json({ message: "Address not found" });
        }

        addressToDelete.remove();
        await user.save();

        res.json({ message: "Address removed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get user addresses
export const getUserAddresses = async (req, res, next) => {
    try {
        const { userId } = req.params;

        const userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(userData.addresses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add product to cart
export const addProductToCart = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { productId, quantity } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const cartItem = { product: productId, quantity };
        user.shoppingCart.push(cartItem);
        await user.save();

        res.status(201).json({ message: "Product added to cart" });
    } catch (error) {
        res.status(500).json({ message: "Unable to add product to cart" });
    }
};

// Get products from cart
export const getProductsFromCart = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).populate({
            path: 'shoppingCart.product',
            model: 'Book',
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ shoppingCart: user.shoppingCart });
    } catch (error) {
        res.status(500).json({ message: "Unable to retrieve shopping cart" });
    }
};

// Delete product from cart
export const deleteProductFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.params;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const itemIndex = user.shoppingCart.findIndex(item => item.product.toString() === productId);

        if (itemIndex === -1) {
            return res.status(404).json({ message: "Product not found in the cart" });
        }

        user.shoppingCart.splice(itemIndex, 1);
        await user.save();

        res.json({ message: "Product removed from cart" });
    } catch (error) {
        res.status(500).json({ message: "Unable to remove product from cart" });
    }
};
