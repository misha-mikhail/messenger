import {IsNotEmpty} from 'class-validator';
export default class GetUsersQuery {
    constructor(obj: any) {
        Object.assign(this, obj);
    }

    @IsNotEmpty()
    username?: string;
}