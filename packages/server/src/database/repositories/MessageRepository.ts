import { User, Message } from "../entities";
import { MessageModel } from '../entities/Message';
import { Conversation } from '../entities/Conversation';
import { Service, Inject } from "typedi";
import { ContainerKeys } from "../../constants";

@Service()
export default class MessageRepository {

    constructor(
        @Inject(ContainerKeys.MessageModel) private readonly model: typeof MessageModel) {
    }

    sendMessage(from: User, to: Conversation, text: string) {
        this.model.create(new Message(from, to, text));
    }
}