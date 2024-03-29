import { WithId } from "mongodb";

export interface User extends WithId<Document> {
    mail: string;
    password: string;
    name?: string;
    surname?: string;
    phone?: string;
    role?: string;
}

export interface Ticket extends WithId<Document> {
    title: string;
    description: string;
    timestamp?: string;
    userid?: string;
}