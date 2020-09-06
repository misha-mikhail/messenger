import { JsonController, Get, CurrentUser, Authorized } from 'routing-controllers';
import { ConversationModel } from '../database/entities/Conversation';
import { User } from '../database/entities';
import { ContainerKeys } from '../constants';
import { Inject } from 'typedi';

@JsonController('/conversations')
export class ConversationsController {
    constructor(
        @Inject(ContainerKeys.ConversationModel) private readonly convsModel: typeof ConversationModel) {
    }

    @Get('/get')
    getConversations(@CurrentUser({ required: true }) currentUser: User) {
        console.log('currentUser', currentUser);

        const convs = this.convsModel.find({
            Members: {
                $elemMatch: { $eq: (currentUser as any)._id }
            },
        });

        return convs.lean();
    }
}
