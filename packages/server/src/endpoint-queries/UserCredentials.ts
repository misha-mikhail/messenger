import { IsNotEmpty } from "class-validator";
import { IUserCredentials } from '@chat/shared';

export class UserCredentials implements IUserCredentials {
    @IsNotEmpty()
    Username: string;

    @IsNotEmpty()
    Password: string;
}
