import { Context } from "koa";

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete',
    OPTIONS = 'options',
}

export interface IHasModel {
    /**
     * The 'model' is a class that must have
     * a static 'fromObject' method.
     */
    model?: new (args?: any) => any;
}

export interface Route extends IHasModel {
    path: string;
    method: HttpMethod;
    action: (ctx: Context) => Promise<any> | void;
}