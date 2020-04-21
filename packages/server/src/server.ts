import { createKoaServer, Action, useContainer } from 'routing-controllers';
import { getJwtSecret } from './auth';
import { UserRepository } from './database/repositories';
import {Container} from "typedi";
import { ContainerKeys } from './constants';

export async function startApplication(port: number) { 
    useContainer(Container);
    Container.set(ContainerKeys.jwtSecret, await getJwtSecret());

    const app = createKoaServer({
        cors: true,
        controllers: [ __dirname + '/controllers/*.js' ],
        authorizationChecker: async (action: Action, _roles: string[]) => {
            const userRepo = Container.get(UserRepository);
            const token = action.request.headers['authorization'];
            return !!userRepo.findUserByToken(token);
        },
        currentUserChecker: async (action: Action) => {
            const userRepo = Container.get(UserRepository);
            const token = action.request.headers['authorization'];
            return userRepo.findUserByToken(token);
        },
    });

    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}
