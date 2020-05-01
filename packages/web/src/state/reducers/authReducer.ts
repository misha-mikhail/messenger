import { LocalStorageKeys } from '../LocalStorageKeys';
import { AuthState } from '../types/AuthState';
import { Reducer } from 'redux';
import { ActionParamsType } from '../types/ActionParamsType';
import axios from 'axios';

export enum StoreActionType {
    SET_TOKEN = 'SET_TOKEN',
    CLEAR_TOKEN = 'CLEAR_TOKEN',
}

export const authReducer: Reducer =
    (
        state: AuthState,
        action: ActionParamsType,
    ): AuthState => {

        switch (action.type) {
            case StoreActionType.SET_TOKEN:
                if (action.token) {
                    localStorage.setItem(LocalStorageKeys.Token, action.token);
                    axios.defaults.headers.common['Authorization'] = action.token;

                    return { ...state, token: action.token };
                }

                return { ...state };

            case StoreActionType.CLEAR_TOKEN:
                localStorage.removeItem(LocalStorageKeys.Token);
                return { ...state, token: '' };

            default:
                return { ...state };
        }

}
