import { Context } from 'koa';
import { Route, HttpMethod } from '../types/route';
// import { Message } from '@chat/shared';

export const MessagesRoutes: Route[] = [
    {
        path: '/messages/get',
        method: HttpMethod.GET,
        action: getMessages,
    },
    {
        path: '/messages/send',
        method: HttpMethod.POST,
        action: sendMessage,
    },
];

function getMessages(ctx: Context) {
    const message = {
        Text: 'Lolka'
    };

    ctx.body = message;
}

function sendMessage(ctx: Context) {
    const message = {
        Text: 'message sent'
    };

    ctx.body = message;
}