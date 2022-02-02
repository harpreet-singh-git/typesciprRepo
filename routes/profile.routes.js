"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controller/profile.controller");
const auth_1 = __importDefault(require("../config/auth"));
const router = (0, express_1.Router)();
// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
const userController = new profile_controller_1.UserController();
router.get('/', userController.getAllPro);
router.post("/user", userController.createProfile);
router.get('/users', auth_1.default, userController.getAllProfile);
router.get('/user', auth_1.default, userController.getProfileById);
exports.default = router;
