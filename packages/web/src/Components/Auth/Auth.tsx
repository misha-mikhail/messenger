import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthCredentialsForm } from './AuthCredentialsForm';
import { AuthNavbar } from './AuthNavbar';
import { AuthFormState } from './AuthFormState';
import { IUserCredentials } from '@chat/shared';
import { FormItem } from './FormItem';
import { connect } from 'react-redux';
import { setToken } from '../../state';
import { AuthFormErrors } from './AuthFormErrors';
import { AuthFormColors } from './AuthFormColors';

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

export const Submit = styled(FormItem)`
    &:not(:first-child), :first-child { /* Злой оверрайд стилей из FormItem. */
        margin-top: 20px;
    }

    cursor: pointer;

    justify-content: center;
    align-items: center;

    padding: 8px 0;
    color: #777;
    background: ${props => !props.errorMessage ? '#DADADA' : AuthFormColors.SoftRed };
    border-bottom: 2px solid ${AuthFormColors.Gray};

    &:hover {
        background: ${props => !props.errorMessage ? '#C4C4C4' : AuthFormColors.Red };
    }
`;

const extractErrorsFromFailedResponse = (failedResp: any) => {
    const errData = failedResp.data;

    let newErrors: AuthFormErrors;

    type ClassValidatorPropertyError = { property: keyof AuthFormErrors, constraints: any[] };

    if ('errors' in errData) {
        newErrors = {} as AuthFormErrors;

        for (const err of errData.errors as ClassValidatorPropertyError[]) {
            newErrors[err.property] = Object.values(err.constraints).join('\n');
        }
    }
    else {
        newErrors = { common: errData.message };
    }

    return newErrors;
};

export const AuthComponent = (props: { dispatch: Function }) => {
    const [formState, setFormState] = useState(AuthFormState.Login);
    const [userCredentials, setUserCredentials] = useState<IUserCredentials>({Username: '', Password: ''});
    const [errors, setErrors] = useState<AuthFormErrors>({});

    useEffect(() => {
        setUserCredentials({Username: '', Password: ''})
        setErrors({});
    }, [ formState ]);

    const submitForm = async () => {
        try {
            const resp = await axios.post('/auth/' + formState, userCredentials);
            props.dispatch(setToken(resp.data.Token));
        } catch (err) {
            setErrors(
                extractErrorsFromFailedResponse(err.response)
            );
        }
    };

    return (
        <AuthContainer>
            <AuthNavbar state={formState} setState={setFormState} />
            <FormContainer>
                <AuthCredentialsForm
                    errors={errors}
                    credentials={userCredentials}
                    setCredentials={setUserCredentials} />

                <Submit errorMessage={errors.common} onClick={submitForm}>
                    {formState === AuthFormState.Login ? 'Let me in!' : 'Register me!'}
                </Submit>
            </FormContainer>
        </AuthContainer>
    );
}

export const Auth = connect()(AuthComponent);
