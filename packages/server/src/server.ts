import { createKoaServer } from 'routing-controllers';
import * as passport from 'koa-passport';
import { passportUseJwtStrategy } from './passport';
import { passportUseLocalStrategy } from './passport/local';

export function startApplication(port: number) {
    const app = createKoaServer({
        controllers: [ __dirname + '/controllers/*.js' ],
    });

    // passportUseLocalStrategy(passport);
    // passportUseJwtStrategy(passport);

    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}
