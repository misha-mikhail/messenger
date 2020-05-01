import { StoreActionType } from './reducers/authReducer';
import { ActionParamsType } from './types/ActionParamsType';

export function setToken(token: string): ActionParamsType {
    return { type: StoreActionType.SET_TOKEN, token };
}

export function clearToken(): ActionParamsType {
    return { type: StoreActionType.CLEAR_TOKEN };
}
