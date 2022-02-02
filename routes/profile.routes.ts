
import { Router, Response, Request } from "express";
// import { check, validationResult } from "express-validator/check";
// import HttpStatusCodes from "http-status-codes";

import User, { IUser } from "../models/user.model";
import { UserController } from "../controller/profile.controller";
import auth from "../config/auth";

const router: Router = Router();

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
const userController = new UserController();

router.get('/', userController.getAllPro);

router.post("/user", userController.createProfile);

router.get('/users', auth, userController.getAllProfile);

router.get('/user', auth, userController.getProfileById);

export default router;