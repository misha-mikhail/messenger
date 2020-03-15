import { Context } from 'koa';
import { validate } from 'class-validator';
import { HttpMethod, Route } from "../types/route";

export function validation(routes: Route[]) {
    return async (ctx: Context, next: Function) => {
        const matchedRoute = routes.find(r => r.path === ctx.path);

        if (!matchedRoute) {
            await next();
            return;
        }

        const { model } = matchedRoute;

        if (!model) {
            return;
        }

        const castFrom = matchedRoute.method === HttpMethod.GET
                       ? ctx.query
                       : ctx.request.body;

        const modelCasted = (model as any).fromObject(castFrom);

        const errors = await validate(modelCasted);

        console.log('Validation:')
        console.log({errors})

        if (errors.length) {
            ctx.status = 400;
            ctx.body = errors;
            return;
        }

        await next();
    }
}