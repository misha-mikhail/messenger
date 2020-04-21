import { IUser } from "@chat/shared";
import { prop, arrayProp, Ref, getModelForClass } from '@typegoose/typegoose';
import { Conversation } from '.';
import * as crypto from 'crypto';
import Container from "typedi";
import { ContainedObjects } from "../../constants";

export class User { // implements IUser
    constructor(username: string, password: string) {
        this.Username = username;

        this.Salt = crypto.randomBytes(128).toString('base64');
        this.PasswordHash = crypto.pbkdf2Sync(password, this.Salt, 1, 128, 'sha1').toString();
    }

    verifyPassword(password: string) {
        if (!password) return false;
        if (!this.PasswordHash) return false;
        return crypto.pbkdf2Sync(password, this.Salt, 1, 128, 'sha1').toString() === this.PasswordHash;
    }

    @prop()
    Username: string;

    @prop()
    PasswordHash: string;

    @prop()
    Salt: string;

    @prop()
    Bio?: string;

    @arrayProp({ itemsRef: 'Conversation' })
    Conversations: Ref<Conversation>[];
}

export const UserModel = getModelForClass(User);
Container.set(ContainedObjects.UserModel, UserModel);