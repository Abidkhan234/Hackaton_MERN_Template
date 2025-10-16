import express from 'express'
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/auth.controller.js';
import { protectedRoute } from '../middlewares/protectedRoute.js';

const userRoute = express.Router();

userRoute.post("/login", loginUser)

userRoute.post("/register", registerUser)

userRoute.post("/logout", logoutUser)

userRoute.post("/refresh-token", refreshAccessToken);

export default userRoute;