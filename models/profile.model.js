"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Profile = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = Profile;
