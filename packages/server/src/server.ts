import { createKoaServer, Action } from 'routing-controllers';
import { UserModel } from './database/entities/User';
import * as jwt from 'jsonwebtoken';
import { getJwtSecret } from './auth';

export function startApplication(port: number) {
    const app = createKoaServer({
        controllers: [ __dirname + '/controllers/*.js' ],
        authorizationChecker: async (action: Action, roles: string[]) => {
            // TODO: извлечь методы где надо

            const token = action.request.headers['authorization'];

            if (!token) return false;

            const jwtSecret = getJwtSecret();

            try {
                jwt.verify(token, jwtSecret);
            } catch {
                return false;
            }

            const decodedToken = jwt.decode(token) as Record<string, object>;

            console.log('decodedToken', decodedToken);

            const user = await UserModel.findById(decodedToken.Id);
            return !!user;
        }
    });

    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}
