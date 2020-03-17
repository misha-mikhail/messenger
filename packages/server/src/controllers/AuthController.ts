import { JsonController, Post } from 'routing-controllers';

@JsonController('/auth')
export class AuthController {

    @Post('/login')
    login() {
        const token = {
            Value: '65as56fs4a65g4a65g4da65g4',
        };

        return token;
    }

    @Post()
    register() {
        const token = {
            Value: '5456as6afaf4afas4f98',
        };

        return token;
    }
}
