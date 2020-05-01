import { StoreActionType } from '../reducers/authReducer';

export interface ActionParamsType {
    type: StoreActionType;
    token?: string;
}
