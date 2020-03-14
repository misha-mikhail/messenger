import { prop, Ref, getModelForClass } from '@typegoose/typegoose';
import { User, Conversation } from '.';
import { IMessage } from '@chat/shared';

export class Message { // implements IMessage
    static createMessage(sender: User, toConversation: Conversation, text: string): Message {
        // TODO: заменить на конструктор.

        const _this = new Message()
        _this.Sender = sender;
        _this.Conversation = toConversation;
        _this.Text = text;

        _this.SentAt = new Date();
        return _this;
    }

    @prop({ ref: 'User' })
    Sender: Ref<User>;

    @prop({ ref: 'Conversation' })
    Conversation: Ref<Conversation>;

    @prop()
    Text: string;

    @prop()
    SentAt: Date;
}

export const MessageModel = getModelForClass(Message);

// {
//     existingMongoose: mongoose,
//     schemaOptions: { collection: 'Message' },
// })