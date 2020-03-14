import { IConversation } from './IConversation';

export interface IUser {
    Username: string;
    PasswordHash?: string;
    Bio?: string;

    Conversations: IConversation[];
}
