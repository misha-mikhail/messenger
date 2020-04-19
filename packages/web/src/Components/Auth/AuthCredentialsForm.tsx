import React, { Dispatch } from 'react';
import { AuthTextbox } from './AuthTextbox';
import { IUserCredentials } from '@chat/shared';
import { AuthFormErrors } from './AuthFormErrors';

interface Props {
    errors?: AuthFormErrors;
    credentials: IUserCredentials;
    setCredentials: Dispatch<IUserCredentials>;
}

export function AuthCredentialsForm(props: Props) {
    const setUsername = (value: string) => props.setCredentials({ Username: value, Password: props.credentials.Password });
    const setPassword = (value: string) => props.setCredentials({ Username: props.credentials.Username, Password: value });

    return (
        <form>
            <AuthTextbox errorMessage={props.errors?.Username}
                         label='Username'
                         value={props.credentials.Username}
                         onInput={setUsername} />

            <AuthTextbox errorMessage={props.errors?.Password}
                         label='Password'
                         value={props.credentials.Password}
                         onInput={setPassword}
                         type='password' />
        </form>
    );
}
