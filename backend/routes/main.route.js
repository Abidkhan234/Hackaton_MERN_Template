import express from 'express'
import userRoute from './user.route.js';

const mainRoute = express.Router();

mainRoute.use("/auth", userRoute);

export default mainRoute;