import { User, Message } from "../entities";
import { IAbstractRepository } from './AbstractRepository';
import { MessageModel } from '../entities/Message';
import { Conversation } from '../entities/Conversation';

// unused
export default class MessageRepository { //implements IAbstractRepository<Message> {
    readonly model = MessageModel;

    sendMessage(from: User, to: Conversation, text: string) {
        this.model.create(new Message(from, to, text));
    }
}