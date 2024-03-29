import { Request, Response } from "express";
import {client} from "../../../dbConfig";
import {Db} from "mongodb";
import {validateCreateUser} from "../../functions/validateInput";
import {createJWT} from "../../functions/createJWT";


export async function createUser(req: Request, res: Response) {

    const valid = await validateCreateUser(req.body);

    if (!valid) {
        res.status(400).send('Invalid input');
    } else {

        try {
            await client.connect();
            const database: Db = client.db('supportPortal');
            const collection = database.collection('users');
            const result = await collection.insertOne(req.body);
            await client.close();
            const token = await createJWT(req.body, result.insertedId.toString());
            res.send({token:token});
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).send('An error occurred while creating the user.');
        }
    }
}