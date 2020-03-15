import { prop, Ref, getModelForClass } from '@typegoose/typegoose';
import { User, Conversation } from '.';
import { IMessage } from '@chat/shared';

export class Message { // implements IMessage
    constructor(sender: User, toConversation: Conversation, text: string) {
        this.Sender = sender;
        this.Conversation = toConversation;
        this.Text = text;

        this.SentAt = new Date();
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