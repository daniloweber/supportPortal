"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const mongodb_1 = require("mongodb");
const uri = "mongodb+srv://testuser:d2VWLT6ihzsaKRjS@databasetest1.kwlntni.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(uri);
const app = (0, express_1.default)();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
