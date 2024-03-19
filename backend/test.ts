import express, {Express, Request, Response } from 'express';
import multer from "multer";
import {Db, MongoClient} from "mongodb";
import * as fs from "fs";

const uri = "mongodb://192.168.0.11:27017/";
const client = new MongoClient(uri);

const app: Express = express();
const upload = multer({dest: 'uploads/'});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post ('/mongo/upload', upload.single('uploaded_file'), async (req:Request,res:Response) => {

    if (!req.file) {
        res.status(400).send({ message: 'No file uploaded' });
        return;
    }

    // Read the file into a Buffer
    const fileBuffer = fs.readFileSync(req.file.path);
    const name = req.file.originalname;
    const title = name.split('.')[0];
    const format = name.split('.')[1];

    await client.connect();
    const database: Db = client.db('nosqlproject');
    const collection = database.collection('testCollection');
    //const result = await collection.insertOne({c:3});
    const result = await collection.insertOne({fileName: title, fileFormat: format,fileContent: fileBuffer});
    await client.close();

    fs.unlinkSync(req.file.path);

    res.send({ status: 'success', message: 'Image successfully uploaded and saved to MongoDB', result: result });
})


const port: number = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
