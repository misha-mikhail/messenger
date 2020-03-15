import { IUser } from './IUser';
import { IMessage } from './IMessage';

export interface IConversation {
    Title: string;
    Members: IUser[];
    Messages: IMessage[];

    CreatedAt: Date;
}