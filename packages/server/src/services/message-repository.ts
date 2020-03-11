import { EntityRepository, AbstractRepository } from 'typeorm';
import { Message, User } from '@chat/shared';

@EntityRepository(Message)
export default class MessageRepository extends AbstractRepository<Message> {
    sendMessage(from: User, to: User, text: string) {
        this.repository.save(new Message(from, to, text));
    }
}