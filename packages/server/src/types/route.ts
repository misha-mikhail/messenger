import { Context } from "koa";

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete',
    OPTIONS = 'options',
}

export interface Route {
    path: string;
    method: HttpMethod;
    action: (ctx: Context) => Promise<any> | void;
}