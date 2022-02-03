"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const profile_model_1 = __importDefault(require("../models/profile.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class ProfileController {
    constructor() {
        this.getAllPro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.json({ status: 'Well done!!' });
        });
        this.createProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // Build profile object based on IProfile
            console.log("req.body", req.body);
            const profileFields = {
                // user: req.userId,
                firstName: req.body.firstName,
                username: req.body.firstName
            };
            try {
                // Create
                let profiles = new profile_model_1.default(profileFields);
                let resUser = yield profiles.save();
                const token = yield jsonwebtoken_1.default.sign({ id: resUser._id }, "jwtSecretToken");
                console.log(token);
                res.json({ status: 200, data: token });
            }
            catch (err) {
                console.error(err);
            }
        });
        this.getAllProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let resUser = yield profile_model_1.default.find();
            // console.log("resUjjjser", resUser);
            res.json({ status: 200, "result": resUser });
        });
        this.getProfileById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let resUser = yield profile_model_1.default.findOne({ _id: req.userId });
            // console.log("resUser", resUser);
            res.json({ status: 200, "result": resUser });
        });
    }
}
exports.ProfileController = ProfileController;
