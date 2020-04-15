import { createKoaServer, Action } from 'routing-controllers';
import { getJwtSecret } from './auth';
import { UserRepository } from './database/repositories';

export function startApplication(port: number) {
    const app = createKoaServer({
        cors: true,
        controllers: [ __dirname + '/controllers/*.js' ],
        authorizationChecker: async (action: Action, _roles: string[]) => {
            // TODO: DI if possible (issue #9).
            const userRepo = new UserRepository(await getJwtSecret());

            const token = action.request.headers['authorization'];
            return !!userRepo.findUserByToken(token);
        },
        currentUserChecker: async (action: Action) => {
            // TODO: DI if possible (issue #9).
            const userRepo = new UserRepository(await getJwtSecret());

            const token = action.request.headers['authorization'];
            return userRepo.findUserByToken(token);
        },
    });

    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}
