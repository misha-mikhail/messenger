import { EntityRepository, AbstractRepository, Repository } from 'typeorm';
import { Conversation, User } from '@chat/shared';

@EntityRepository(Conversation)
export default class ConversationRepository extends Repository<Conversation> {
}