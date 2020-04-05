import { IUser } from '@chat/shared';
import GetUserQuery from '../endpoint-queries/GetUserQuery';
import { JsonController, Post, Get, QueryParams, OnUndefined } from 'routing-controllers';
import { UserRepository } from '../database/repositories/UserRepository';
import { getJwtSecret } from '../auth';

@JsonController('/users')
export class UsersController {

    // TODO: DI (issue #9).

    @Get('/get')
    @OnUndefined(404)
    async getUserInfo(@QueryParams() query: GetUserQuery) {
        const userRepo = new UserRepository(await getJwtSecret());

        return await userRepo.getUserInfo(query.Username);
    }

    @Post('/edit-bio')
    editBio() {
        const user: IUser = {
            Conversations: [],
            Username: 'some-username',
            Bio: 'This is the edited bio !',
        };

        return user;
    }

}
