import express from 'express'
import userRoute from './user.route.js';
import aiRoute from './ai.route.js';
import vitalRoute from './vital.route.js';

const mainRoute = express.Router();

mainRoute.use("/auth", userRoute);

mainRoute.use("/ai", aiRoute);

mainRoute.use("/vital", vitalRoute);

export default mainRoute;