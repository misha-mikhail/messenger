import { Context } from 'koa';
import { Route, HttpMethod } from '../types/route';
// import { Contact } from '@chat/shared';

export const ContactsRoutes: Route[] = [
    {
        path: '/contacts/get',
        method: HttpMethod.GET,
        action: getContacts,
    },
    {
        path: '/contacts/add',
        method: HttpMethod.POST,
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