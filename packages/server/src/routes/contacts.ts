import { Context } from 'koa';
import Route from '../types/route';
// import { Contact } from '@chat/shared';

export const ContactsRoutes: Route[] = [
    {
        path: '/contacts/get',
        method: 'GET',
        action: getContacts,
    },
    {
        path: '/contacts/add',
        method: 'POST',
        action: addContact,
    },
];

function getContacts(ctx: Context) {
    const contact = {
        Friend: 228,
    };

    ctx.body = contact;
}

function addContact(ctx: Context) {
    const contact = {
        Friend: 1337,
    };

    ctx.body = contact;
}