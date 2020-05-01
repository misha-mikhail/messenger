import { User } from '../database/entities/User';
import GetUserQuery from '../endpoint-queries/GetUserQuery';
import { JsonController, Patch, Get, QueryParams, OnUndefined, CurrentUser, Authorized, Body, HttpCode, OnNull } from 'routing-controllers';
import { UserRepository } from '../database/repositories/UserRepository';
import { getJwtSecret } from '../auth';

@JsonController('/users')
export class UsersController {

    constructor(private readonly userRepo: UserRepository) { 
    }

    @Get('/get')
    @OnUndefined(404)
    async getUserInfo(@QueryParams() query: GetUserQuery) {
        return await this.userRepo.getUserInfo(query.Username);
    }

    @Patch('/edit-bio')
    @OnNull(204)
    @Authorized()
    async editBio(
        @CurrentUser() currentUser: User & { _id: Buffer },
        @Body() requestBody: { NewBio: string }
    ) {
        await this.userRepo.editBio(currentUser, requestBody.NewBio);
        return null;
    }

}
