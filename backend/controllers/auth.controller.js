import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js";

const registerUser = async (req, res) => {
    try {
        const { body } = req;

        const user = await User.findOne({
            $or: [{ email: body.email }, { userName: body.userName }],
        });

        if (user) {
            return res.status(409).send({ status: 409, message: "User already exits" });
        }

        await User.create({ ...body });

        res.status(201).send({ status: 201, message: "Register Succefully" });
    } catch (error) {
        console.log("Register Error", error);
        res.status(500).send({ status: 500, message: "Internal server error", error: error.message })
    }
}

const loginUser = async (req, res) => {
    try {

        const { body } = req;

        if (body.userName && body.email) {
            return res.status(400).send({
                status: "error",
                message: "Provide either username or email, not both"
            });
        }

        const user = await User.findOne({
            $or: [{ email: body.email }, { userName: body.userName }]
        }).select("+password");


        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found" });
        }

        const isValidPassword = await user.comparePassword(body.password);

        if (!isValidPassword) {
            return res.status(400).send({ status: 400, message: "Invalid password" })
        }

        const accessToken = generateAccessToken("1m", user._id);

        const refreshToken = generateAccessToken("2m", user._id);

        user.refreshToken = refreshToken;

        await user.save();

        res.status(200).send({ status: 200, message: "Logged in successfully", accessToken, refreshToken })
    } catch (error) {
        console.log("Login Error", error);
        res.status(500).send({ status: 500, message: "Internal server error", error: error.message });
    }
}

const logoutUser = (req, res) => {
    res.status(200).send({ status: 200, message: "Logout successfully" });
}

const refreshAccessToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_key);

        const user = await User.findOne({ _id: decoded.id });

        if (!user) {
            return res.status(404).send({ status: 404, message: "User not found" });
        }

        const newAccessToken = generateAccessToken("10m", user.email, user._id);

        return res.status(200).send({ status: 200, message: "Token refreshed", accessToken: newAccessToken })
    } catch (error) {
        console.log(error);
        if (error.message.includes("jwt expired")) {
            return res.status(401).send({ status: 401, message: "Sign In again" })
        }
        res.status(500).send({ status: 500, message: "Internal server error" })
    }
};

const resetPassword = (req, res) => {

}

const emailVerification = (req, res) => { 
    try {
        
    } catch (error) {
        
    }
}

const otpVerification = (req, res) => { }

export { loginUser, registerUser, refreshAccessToken, logoutUser, resetPassword, emailVerification, otpVerification }
