import {Request, Response} from "express";
import * as fs from "fs";
import {Db} from "mongodb";
import {client} from "../../../dbConfig";
import {validateCreateTicket} from "../../functions/validateInput";
import {validateAuth} from "../../functions/validateJWT";
import jwt, {JwtPayload} from "jsonwebtoken";

export async function createTicket (req: Request, res: Response) {

    if (!req.headers.authorization) {
        res.status(401).send({message: 'No token provided'});
    } else {

        const accessToken: string = req.headers.authorization.split(' ')[1];
        const validToken = await validateAuth(accessToken);

        if (!validToken) {
            res.status(401).send({message: 'Invalid token'});
            return;
        } else {

            const valid = validateCreateTicket(req.body);
            //const valid = true;
            if (!valid) {
                res.status(400).send({message: 'Invalid input'});
                return;
            } else {
                try {
                    await client.connect();
                    const database: Db = client.db('supportPortal');
                    const collection = database.collection('tickets');

                    let payload = jwt.decode(accessToken) as JwtPayload


                    if (req.file) {

                        const filebuffer = fs.readFileSync(req.file.path);
                        const name = req.file.originalname;
                        const title = name.split('.')[0];
                        const format = name.split('.')[1];

                        const result = await collection.insertOne({
                            title: req.body.title,
                            description: req.body.description,
                            userid: payload.id,
                            timestamp: new Date().toISOString(),
                            file: filebuffer,
                            fileName: title,
                            fileFormat: format,
                            status: 'new',
                            editorid: 'none'
                        });

                        fs.unlinkSync(req.file.path);

                    } else {
                        const result = await collection.insertOne({
                            title: req.body.title,
                            description: req.body.description,
                            userid: payload.id,
                            timestamp: new Date().toISOString(),
                            status: 'new',
                            editorid: 'none'
                        });
                    }

                    await client.close();
                    res.send({message: 'Ticket created successfully'});

                } catch (error) {
                    console.error('An error occurred:', error);
                    res.status(500).send('An error occurred while creating ticket.');

                }
            }
        }
    }
}