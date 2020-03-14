import { IUser } from './IUser';
import { IConversation } from './IConversation';

export interface IMessage {
    Sender: IUser;
    Conversation: IConversation;

    Text: string;
    SentAt: Date;
}
