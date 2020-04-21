import * as jwt from 'jsonwebtoken';
import { User, UserModel } from '../entities/User';
import { JwtPayload } from '../../auth';
import { IUser } from '@chat/shared';
import { Service, Inject } from 'typedi';
import { ContainerKeys } from '../../constants';

@Service()
export class UserRepository {


    constructor(@Inject(ContainerKeys.jwtSecret) private readonly jwtSecret: string,
                @Inject(ContainerKeys.UserModel) private readonly model: typeof UserModel.prototype) {
    }

    async create(username: string, password: string) {
        return await this.model.create(new User(username, password));
    }

    async findUserByUsername(username: string) {
        return await this.model.findOne({ Username: username });
    }

    async getUserInfo(username: string): Promise<IUser> {
        const user = (await this.model.findOne({ Username: username }, 'Username Bio'))?.toObject();

        if (user) {
            user._id = user._id.toString();
        }

        return user;
    }

    async findUserByToken(token: string) {
        if (!token) return null;

        try {
            jwt.verify(token, this.jwtSecret);
        } catch {
            return null;
        }

        const decodedToken = jwt.decode(token) as JwtPayload;

        return await this.model.findById(decodedToken.Id);
    }

    async editBio(user: User, newBio: string) {
        await this.model.updateOne(user, { Bio: newBio });
    }

    createJwt(user: User & { _id: string }) {
        const payload: JwtPayload = {
            Id: user._id.toString(),
            Username: user.Username,
        };

        const token = jwt.sign(payload, this.jwtSecret);

        return token;
    }
}
