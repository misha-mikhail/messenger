import * as jwt from 'jsonwebtoken';
import { UserModel, User } from '../entities/User';
import { JwtPayload } from '../../auth';
import { IUser } from '@chat/shared';

export class UserRepository {
    readonly model = UserModel;
    readonly jwtSecret: string;

    constructor(jwtSecret: string) {
        this.jwtSecret = jwtSecret;
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

    createJwt(user: User & { _id: string }) {
        const payload: JwtPayload = {
            Id: user._id.toString(),
            Username: user.Username,
        };

        const token = jwt.sign(payload, this.jwtSecret);

        return token;
    }
}
