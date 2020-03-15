import { UserModel, User } from '../database/entities/User';
import { ConversationModel, Conversation } from '../database/entities/Conversation';
import { Route, HttpMethod } from '../types/route';
import { Context } from 'koa';

export const TestRoutes: Route[] = [
    {
        path: '/test/init',
        method: HttpMethod.GET,
        action: testInitDatabase,
    }
]

async function testInitDatabase(ctx: Context) {
    const misha = await UserModel.create(new User('misha', 'pass'));
    const mikhail = await UserModel.create(new User('mikhail', 'password'));

    const newConv = await ConversationModel.create(new Conversation());

    newConv.Members.push(misha);
    newConv.Members.push(mikhail);

    await newConv.save();

    console.log({newConv});

    ctx.body = newConv;
}