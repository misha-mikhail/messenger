import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as bodyparser from 'koa-bodyparser';
import { Route } from './types/route';
import { AuthRoutes } from './routes/auth';
import { ContactsRoutes } from './routes/contacts';
import { MessagesRoutes } from './routes/messages';
import { UsersRoutes } from './routes/users';
import { TestRoutes } from './routes/test';
import { validation } from './middlewares/validation-middleware';
import * as passport from 'koa-passport';
import { passportUseJwtStrategy } from './passport';
import { passportUseLocalStrategy } from './passport/local';

function registerRoutes(router: Router, routes: Route[]) {
    for (const route of routes) {
        router[route.method](route.path, route.action);
    }
}

const AllRoutes: Route[] = [
    ...AuthRoutes,
    ...ContactsRoutes,
    ...MessagesRoutes,
    ...UsersRoutes,
    ...TestRoutes,
]

export function startApplication(port: number) {
    const app = new Koa();
    const router = new Router();

    passportUseLocalStrategy(passport);
    passportUseJwtStrategy(passport);

    registerRoutes(router, AllRoutes);

    router.get('/', (ctx) => {
        ctx.body = 'Hello!';
    })


    app.use(bodyparser());
    app.use(passport.initialize());
    app.use(validation(AllRoutes));
    app.use(router.routes());


    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}