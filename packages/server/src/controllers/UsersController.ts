import { IUser } from '@chat/shared';
import GetUsersQuery from '../endpoint-queries/get-users-query';
import { JsonController, Post, Get, QueryParams, OnUndefined } from 'routing-controllers';
import { UserModel } from '../database/entities/User';

@JsonController('/users')
export class UsersController {

    @Get('/get')
    @OnUndefined(404)
    async getUserInfo(@QueryParams() query: GetUsersQuery) {
        // TODO: не возвращать PasswordHash и Salt здесь.
        return (await UserModel.findOne({ Username: query.username }))?.toObject();
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
