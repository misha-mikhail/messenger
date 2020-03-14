import { IUser } from "@chat/shared";
import { prop, arrayProp, Ref, getModelForClass } from '@typegoose/typegoose';
import { Conversation } from '.';

export class User { // implements IUser
    constructor(username: string, password: string) {
        this.Username = username;
        this.PasswordHash = password; // TODO: Hashing.

        return this;
    }

    @prop()
    Username: string;

    @prop()
    PasswordHash?: string;

    @prop()
    Bio?: string;

    @arrayProp({ itemsRef: 'Conversation' })
    Conversations: Ref<Conversation>[];
}

export const UserModel = getModelForClass(User);