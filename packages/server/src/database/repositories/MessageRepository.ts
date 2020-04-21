import { User, Message } from "../entities";
import { IAbstractRepository } from './AbstractRepository';
import { MessageModel } from '../entities/Message';
import { Conversation } from '../entities/Conversation';
import { Service, Inject } from "typedi";
import { ContainerKeys } from "../../constants";

// unused
@Service()
export default class MessageRepository { //implements IAbstractRepository<Message> {
    
    constructor(@Inject(ContainerKeys.MessageModel) private readonly model) {
    }

    sendMessage(from: User, to: Conversation, text: string) {
        this.model.create(new Message(from, to, text));
    }
}