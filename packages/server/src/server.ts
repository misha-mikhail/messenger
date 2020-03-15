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

    registerRoutes(router, AllRoutes);

    app.use(bodyparser());
    app.use(validation(AllRoutes));
    app.use(router.routes());
    app.listen(port);

    console.log(`Listening: http://localhost:${port}/`);

    return app;
}