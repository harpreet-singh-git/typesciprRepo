"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(req, res, next) {
    // Get token from header
    const token = req.header("Authorization");
    // Check if no token
    if (!token) {
        return res
            .json({ msg: "No token, authorization denied" });
    }
    // Verify token
    try {
        const payload = jsonwebtoken_1.default.verify(token, "jwtSecretToken");
        console.log("payload", payload);
        req.userId = payload.id;
        next();
    }
    catch (err) {
        res
            .json({ msg: "Token is not valid" });
    }
}
exports.default = default_1;
