import { JsonController, Get, Post } from 'routing-controllers';

@JsonController('/messages')
export class MessagesController {

    @Get('/get')
    getMessages() {
        const message = {
            Text: 'Lolka'
        };

        return message;
    }

    @Post('/send')
    sendMessage() {
        const message = {
            Text: 'message sent'
        };

        return message;
    }
}
