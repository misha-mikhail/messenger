import { IUserCredentials } from "@chat/shared";

export interface AuthFormErrors extends Partial<IUserCredentials> {
    common?: string;
}