// controllers/authController.js
import User from "../models/User.js";
import { signInToken } from "../utils/token.js";
import { signupValidation } from "../validators/authValidator.js";

export const signupHandler = async (req, res) => {
  try {
    // 1. Validate request
    const { error } = signupValidation(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // 3. Create user (no need to hash manually here!)
    const user = User.create(req.body);
    const token = signInToken(user);

    res.status(201).json({
      user,
      token,
      success: true,
      message: "user created successfully!",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
//////////////////                                     Login Handler
export const signInHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    const token = signInToken(user);
    res.status(201).json({
      user: userWithoutPassword,
      token,
      success: true,
      message: "user logged in successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signin Failed",
      error: error.message,
    });
  }
};
