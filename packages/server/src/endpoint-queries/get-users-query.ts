import {IsNotEmpty} from 'class-validator';

export default class GetUsersQuery {
    static fromObject(obj: any): GetUsersQuery {
        return Object.assign(new GetUsersQuery(), obj);
    }

    @IsNotEmpty()
    username?: string;
}