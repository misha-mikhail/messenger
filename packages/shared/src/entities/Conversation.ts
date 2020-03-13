import User from './User';
import Message from './Message';
import {
    Entity,
    ObjectID,
    ObjectIdColumn,
    Column,
    CreateDateColumn,
    ManyToMany,
    OneToMany,
    JoinTable,
} from 'typeorm';

export interface IConversation {
    Title: string;
    Members: User[];

    CreatedAt: Date;
}

@Entity()
export default class Conversation implements IConversation {
    @ObjectIdColumn()
    Id: ObjectID;

    @Column()
    Title: string;

    @ManyToMany(type => User, user => user.Conversations)
    @JoinTable()
    Members: User[];

    @OneToMany(type => Message, msg => msg.Conversation)
    Messages: Message[];

    @CreateDateColumn()
    CreatedAt: Date;
}