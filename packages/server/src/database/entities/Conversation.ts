import { prop, arrayProp, Ref, getModelForClass } from '@typegoose/typegoose';
import { Message, User } from '.';

export class Conversation { // implements IConversation
    @prop()
    Title: string;

    @arrayProp({ itemsRef: { name: 'UserModel' } })
    Members: Ref<User>[];

    @arrayProp({ itemsRef: { name: 'MessageModel' } })
    Messages: Ref<Message>[];

    @prop()
    CreatedAt: Date;
}

export const ConversationModel = getModelForClass(Conversation);