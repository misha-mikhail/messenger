import React, { Dispatch } from 'react';
import { AuthTextboxFormItem } from './AuthTextbox';
import { IUserCredentials } from '@chat/shared';

interface Props {
    credentials: IUserCredentials;
    setCredentials: Dispatch<IUserCredentials>;
}

export function AuthCredentialsForm(props: Props) {
    const setUsername = (value: string) => props.setCredentials({ Username: value, Password: props.credentials.Password });
    const setPassword = (value: string) => props.setCredentials({ Username: props.credentials.Username, Password: value });

    return (
        <form>
            <AuthTextboxFormItem label='Username' value={props.credentials.Username} onInput={setUsername} />
            <AuthTextboxFormItem label='Password' value={props.credentials.Password} onInput={setPassword} type='password' />
        </form>
    );
}
