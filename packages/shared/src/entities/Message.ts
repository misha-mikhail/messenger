import {Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, ManyToOne} from 'typeorm';
import User from './User';

export interface IMessage {
    Text: string;
    SentAt: Date;
}

@Entity()
export default class Message implements IMessage {
    constructor(from: User, to: User, text: string) {
        this.Sender = from;
        this.Recipient = to;
        this.Text = text;
    }

    @ObjectIdColumn()
    Id: ObjectID;

    @ManyToOne(type => User, user => user.SentMessages)
    Sender: User;

    @ManyToOne(type => User, user => user.ReceivedMessages)
    Recipient: User;

    @Column()
    Text: string;

    @CreateDateColumn()
    SentAt: Date;
}