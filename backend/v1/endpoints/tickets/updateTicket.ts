import { Request, Response } from 'express';
import {validateAuth} from "../../functions/validateJWT";
import {client} from "../../../dbConfig";
import {Db, ObjectId} from "mongodb";
import jwt, {JwtPayload} from "jsonwebtoken";
import fs from "fs";

export async function updateTicket(req: Request, res: Response) {

    if (!req.headers.authorization) {
        res.status(401).send({message: 'No token provided'});
    } else {

        const accessToken: string = req.headers.authorization.split(' ')[1];
        const validToken = await validateAuth(accessToken);

        if (!validToken) {
            res.status(401).send({message: 'Invalid token'});
            return;
        } else {

            const enoughPermissions: boolean = (jwt.decode(accessToken) as JwtPayload).role === 'staff' || (jwt.decode(accessToken) as JwtPayload).role === 'admin';

            if (!enoughPermissions) {
                res.status(403).send({message: 'Not enough permissions'});
                return;
            } else {
                try {
                    await client.connect();
                    const database: Db = client.db('supportPortal');
                    const collection = database.collection('tickets');
                    const payload = jwt.decode(accessToken) as JwtPayload;

                    let result;

                    if (req.file) {

                        const filebuffer = fs.readFileSync(req.file.path);
                        const name = req.file.originalname;
                        const title = name.split('.')[0];
                        const format = name.split('.')[1];


                        result = await collection.updateOne({_id: new ObjectId(req.params.id)}, {
                        $set: {
                            title: req.body.title,
                            description: req.body.description,
                            editorid: payload.id,
                            status: req.body.status,
                            file: filebuffer,
                            fileName: title,
                            fileFormat: format,
                        }
                    });

                            fs.unlinkSync(req.file.path);

                        }
                    else {
                        console.log(req.body);
                        result = await collection.updateOne({_id: new ObjectId(req.params.id)}, {
                            $set: {
                                title: req.body.title,
                                description: req.body.description,
                                editorid: req.body.editorid,
                                status: req.body.status
                            }
                        });
                    }
                    await client.close();
                    res.send(result);
                } catch (e) {
                    res.status(500).send({message: 'Internal server error'});
                }
            }
        }
    }
}