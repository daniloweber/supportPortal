import express, {Express, Request, Response } from 'express';
import multer from "multer";
import {Db, MongoClient} from "mongodb";
import * as fs from "fs";

const uri = "mongodb+srv://testuser:d2VWLT6ihzsaKRjS@databasetest1.kwlntni.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const app: Express = express();
const upload = multer({dest: 'uploads/'});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port: number = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
