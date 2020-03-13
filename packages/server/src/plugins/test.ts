import server from '../server';
import { getCustomRepository } from 'typeorm';
import {
    MessageRepository,
    UserRepository,
    ConversationRepository,
} from '../services';

server.get('/test/init', async function(request, reply) {

    const userRepo = getCustomRepository(UserRepository);
    const convRepo = getCustomRepository(ConversationRepository);
    const messageRepo = getCustomRepository(MessageRepository);

    const newConv = convRepo.create();

    const misha = await userRepo.createNew('misha', 'pass');
    const mishanya = await userRepo.createNew('mikhail', 'password');

    newConv.Members = [ misha, mishanya ];

    await convRepo.save(newConv);

    console.log({newConv});
});