import {Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, ManyToOne} from 'typeorm';
import User from './User';
import Conversation from './Conversation';

export interface IMessage {
    Text: string;
    SentAt: Date;
}

@Entity()
export default class Message implements IMessage {
    constructor(sender: User, toConversation: Conversation, text: string) {
        this.Sender = sender;
        this.Conversation = toConversation;
        this.Text = text;
    }

    @ObjectIdColumn()
    Id: ObjectID;

    @ManyToOne(type => User)
    Sender: User;

    @ManyToOne(type => Conversation, conversation => conversation.Messages)
    Conversation: Conversation;

    @Column()
    Text: string;

    @CreateDateColumn()
    SentAt: Date;
}