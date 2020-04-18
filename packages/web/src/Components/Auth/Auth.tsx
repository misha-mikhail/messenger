import React, { useState } from 'react';
import { LoginForm } from "./LoginForm";
import { RegisterForm } from './RegisterForm';
import { AuthNavbar } from './AuthNavbar';
import { AuthFormState } from "./AuthFormState";
import styled from 'styled-components';

const AuthContainer = styled.section`
    width: 500px;

    display: flex;
    flex-direction: column;
    background: #F3F3F3;
`;

const Form = styled.section`
    padding: 20px 40px;
`;

export function Auth() {
    const [navState, setNavState] = useState(AuthFormState.Register);

    return (
        <AuthContainer>
            <AuthNavbar
                state={navState}
                setState={setNavState}
            />
            <Form>
                {
                    navState === AuthFormState.Login
                  ? <LoginForm />
                  : <RegisterForm />
                }
            </Form>
        </AuthContainer>
    );
}
