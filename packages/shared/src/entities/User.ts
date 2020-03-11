import {Entity, ObjectID, ObjectIdColumn, Column} from 'typeorm';
import Message from './Message';

export interface IUser {
    Username: string;
    PasswordHash?: string;
    Bio?: string;
}

@Entity()
export default class User implements IUser {
    @ObjectIdColumn()
    Id: ObjectID;

    @Column()
    Username: string;

    @Column()
    PasswordHash?: string;

    @Column()
    Bio?: string;

    @Column()
    SentMessages: Message[];

    @Column()
    ReceivedMessages: Message[];
}