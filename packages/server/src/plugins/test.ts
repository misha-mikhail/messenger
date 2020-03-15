import server from '../server';
import { UserModel, User } from '../database/entities/User';
import { ConversationModel, Conversation } from '../database/entities/Conversation';

server.get('/test/init', async function(request, reply) {
    const misha = await UserModel.create(new User('misha', 'pass'));
    const mikhail = await UserModel.create(new User('mikhail', 'password'));

    const newConv = await ConversationModel.create(new Conversation());

    newConv.Members.push(misha);
    newConv.Members.push(mikhail);

    await newConv.save();

    console.log({newConv});
    reply.code(204);
});