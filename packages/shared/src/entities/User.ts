import {Entity, ObjectID, ObjectIdColumn, Column} from 'typeorm';

@Entity()
export default class User {
    @ObjectIdColumn()
    Id: ObjectID;

    @Column()
    Username: string;

    @Column()
    PasswordHash?: string;

    @Column()
    Bio?: string;
}