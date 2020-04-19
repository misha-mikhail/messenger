import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AuthCredentialsForm } from './AuthCredentialsForm';
import { AuthNavbar } from './AuthNavbar';
import { AuthFormState } from './AuthFormState';
import { IUserCredentials } from '@chat/shared';
import { FormItem } from './FormItem';
import axios from 'axios';
import { connect } from 'react-redux';
import { setToken } from '../../state';

const AuthContainer = styled.section`
    margin: 0 auto; /* Это временно. Нужно сделать нормально! */

    width: 500px;

    display: flex;
    flex-direction: column;
    background: #F3F3F3;
`;

const FormContainer = styled.section`
    padding: 20px 40px;
    padding-bottom: 28px; /* Я так вижу. */
`;

const Submit = styled(FormItem)`
    &:not(:first-child), :first-child { /* Злой оверрайд стилей из FormItem. */
        margin-top: 20px;
    }

    cursor: pointer;

    justify-content: center;
    align-items: center;

    padding: 8px 0;
    color: #777;
    background: #DADADA;

    &:hover {
        background: #C4C4C4;
    }
`;

let AuthComponent = (props: { dispatch: Function }) => {
    const [formState, setFormState] = useState(AuthFormState.Login);
    const [userCredentials, setUserCredentials] = useState<IUserCredentials>({Username: '', Password: ''});

    useEffect(() => setUserCredentials({Username: '', Password: ''}), [ formState ]);

    const submitForm = async () => {
        const resp = await axios.post('/auth/' + formState, userCredentials);
        props.dispatch(setToken(resp.data.Token));
    };

    return (
        <AuthContainer>
            <AuthNavbar state={formState} setState={setFormState} />
            <FormContainer>
                <AuthCredentialsForm
                    credentials={userCredentials}
                    setCredentials={setUserCredentials} />

                <Submit onClick={submitForm}>
                    {formState === AuthFormState.Login ? 'Let' : 'Register'} me in!
                </Submit>
            </FormContainer>
        </AuthContainer>
    );
}

export const Auth = connect()(AuthComponent);
