import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as bodyparser from 'koa-bodyparser';
import { Route } from './types/route';
import { AuthRoutes } from './routes/auth';
import { ContactsRoutes } from './routes/contacts';
import { MessagesRoutes } from './routes/messages';
import { UsersRoutes } from './routes/users';
import { TestRoutes } from './routes/test';

function registerRoutes(router: Router, routes: Route[]) {
    for (const route of routes) {
        router[route.method](route.path, route.action);
    }
}

export function startApplication(port: number) {
    const app = new Koa();
    const router = new Router();

    console.log(router);

    registerRoutes(router, AuthRoutes);
    registerRoutes(router, ContactsRoutes);
    registerRoutes(router, MessagesRoutes);
    registerRoutes(router, UsersRoutes);
    registerRoutes(router, TestRoutes);

    app.use(bodyparser());
    app.use(router.routes());
    app.listen(port);

    return app;
}