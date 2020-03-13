import {Entity, ObjectID, ObjectIdColumn, Column, ManyToOne, ManyToMany} from 'typeorm';
import Message from './Message';
import Conversation from './Conversation';

export interface IUser {
    Username: string;
    PasswordHash?: string;
    Bio?: string;
}

@Entity()
export default class User implements IUser {
    constructor(username: string, password: string) {
        this.Username = username;
        this.PasswordHash = password; // TODO: Hashing.
    }

    @ObjectIdColumn()
    Id: ObjectID;

    @Column()
    Username: string;

    @Column()
    PasswordHash?: string;

    @Column()
    Bio?: string;

    @ManyToMany(type => Conversation, c => c.Members)
    Conversations: Conversation[];
}