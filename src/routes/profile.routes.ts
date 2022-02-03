
import { Router, Response, Request } from "express";
// import { check, validationResult } from "express-validator/check";
// import HttpStatusCodes from "http-status-codes";

import User, { IUser } from "../models/user.model";
import { ProfileController } from "../controller/profile.controller";
import auth from "../../config/auth";

const router: Router = Router();

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
const profileController = new ProfileController();

router.get('/', profileController.getAllPro);

router.post("/user", profileController.createProfile);

router.get('/users', auth, profileController.getAllProfile);

router.get('/user', auth, profileController.getProfileById);

export default router;