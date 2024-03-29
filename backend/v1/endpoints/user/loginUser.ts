import { Request, Response } from "express";
import {client} from "../../../dbConfig";
import {Db} from "mongodb";
import {createJWT} from "../../functions/createJWT";
import {User} from "../../functions/interfaces";

export async function loginUser(req: Request, res: Response) {

    try {
        await client.connect();
        const database: Db = client.db('supportPortal');
        const collection = database.collection('users');
        const result = await collection.findOne({mail: req.body.mail, password: req.body.password});
        await client.close();
        if (!result) {
            res.status(404).send('User not found');
        } else {
            const token: string = await createJWT(result as User, result._id.toString());
            res.send({token: token});
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('An error occurred while logging in.');
    }
}