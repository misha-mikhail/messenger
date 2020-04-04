import { createKoaServer, Action } from 'routing-controllers';
import { UserModel } from './database/entities/User';
import * as jwt from 'jsonwebtoken';
import { getJwtSecret } from './auth';

// TODO: вынести в UserRepository
async function findUserByToken(token: string) {
    if (!token) return null;

    const jwtSecret = getJwtSecret();

    try {
        jwt.verify(token, jwtSecret);
    } catch {
        return null;
    }

    const decodedToken = jwt.decode(token) as Record<string, object>;

    console.log('decodedToken', decodedToken);

    const user = await UserModel.findById(decodedToken.Id);
    return user;
}

export function startApplication(port: number) {
    const app = createKoaServer({
        controllers: [ __dirname + '/controllers/*.js' ],
        authorizationChecker: async (action: Action, roles: string[]) => {
            const token = action.request.headers['authorization'];
            return !!findUserByToken(token);
        },
        currentUserChecker: async (action: Action) => {
            const token = action.request.headers['authorization'];
            return findUserByToken(token);
        },
    });

    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}
