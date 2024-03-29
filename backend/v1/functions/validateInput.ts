import {User} from "./interfaces";

export async function validateCreateUser(user: User) {

    const requiredFields = ['mail', 'password', 'name', 'surname', 'phone', 'role'];
    const objectKeys = Object.keys(user);

    if (objectKeys.toString() !== requiredFields.toString()) {
        return false;
    } else {
        return !(typeof user.mail !== 'string' || typeof user.password !== 'string' || typeof user.role !== 'string' || typeof user.name !== 'string' || typeof user.surname !== 'string' || typeof user.phone !== 'string');
    }

}

export async function validateCreateTicket(ticket: any) {

    const requiredFields = ['title', 'description'];
    const objectKeys = Object.keys(ticket);

    if (objectKeys.toString() !== requiredFields.toString()) {
        return false;
    } else {
        return !(typeof ticket.title !== 'string' || typeof ticket.description !== 'string');
    }

}