import { IsNotEmpty } from "class-validator";

export class UserCredentials {
    @IsNotEmpty()
    Username: string;

    @IsNotEmpty()
    Password: string;
}
