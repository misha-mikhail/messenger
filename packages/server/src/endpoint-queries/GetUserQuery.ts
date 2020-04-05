import { IsNotEmpty } from 'class-validator';

export default class GetUserQuery {
    @IsNotEmpty()
    Username: string;
}