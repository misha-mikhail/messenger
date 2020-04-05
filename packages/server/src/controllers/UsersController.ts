import { IUser } from '@chat/shared';
import GetUserQuery from '../endpoint-queries/GetUserQuery';
import { JsonController, Post, Get, QueryParams, OnUndefined } from 'routing-controllers';
import { UserModel } from '../database/entities/User';

@JsonController('/users')
export class UsersController {

    @Get('/get')
    @OnUndefined(404)
    async getUserInfo(@QueryParams() query: GetUserQuery) {
        return (await UserModel.findOne(query, 'Username Bio'))?.toObject();
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
