import { User, Message } from "../entities";
import { AbstractRepository } from '../abstractions/abstract-repository';
import { MessageModel } from '../entities/Message';
import { Conversation } from '../entities/Conversation';

// unused
export default class MessageRepository { // implements AbstractRepository<Message>
    readonly model = MessageModel;

    sendMessage(from: User, to: Conversation, text: string) {
        this.model.create(Message.createMessage(from, to, text));
    }
}