import { createStore, Store } from 'redux'
import { authReducer } from './reducers/authReducer';
import { AuthState } from './types/AuthState';
import { LocalStorageKeys } from './LocalStorageKeys';

export const store: Store = createStore<AuthState, any, any, any>(authReducer, {
    token: localStorage.getItem(LocalStorageKeys.Token) ?? '',
});
