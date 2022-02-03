"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../config/db"));
const profile_routes_1 = __importDefault(require("../src/routes/profile.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("../config/auth"));
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_1.default)();
app.use(body_parser_1.default.json());
app.use("/api/auth", auth_1.default);
app.use("/api", profile_routes_1.default);
// app.use("/api/profile", profile);
const port = 3000
const server = app.listen(port, () => {
    console.log('The application is listening on port !',`${port}`);
});
exports.default = server;
