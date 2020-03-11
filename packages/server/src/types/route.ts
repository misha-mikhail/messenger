import { Context } from "koa";

export default interface Route {
    path: string;
    method: 'GET' | 'POST' | 'PATCH' | 'PUT';
    action: (ctx: Context) => Promise<any> | void;
}