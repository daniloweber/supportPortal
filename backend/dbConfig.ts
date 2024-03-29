import { MongoClient } from "mongodb";

const username = 'supportPortal';
const password = 'supportPortal';
const host = '192.168.0.11:27017'; // your MongoDB host
const dbName = 'supportPortal'; // your database name

const uri = `mongodb://${username}:${password}@${host}/${dbName}`;

export const client = new MongoClient(uri);