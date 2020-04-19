import React from  'react';
import styled from 'styled-components';
import { AuthFormState } from './AuthFormState';

enum Colors {
    DarkGray = '#777',
    Gray = '#C0C0C0',
}

const Button = styled.a`
    color: ${Colors.DarkGray};

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    padding: 20px 0;

    font-size: 15px;
    text-transform: uppercase;


    &:hover {
        /* TODO: Add ghost copy of sliding underline. */
    }
`;

const ButtonsContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;

const AuthNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${Colors.Gray};
`;

const SlidingUnderline = styled.div<{ state: AuthFormState }>`
    width: 50%;
    height: 4px;
    margin-top: -4px;
    background: ${Colors.Gray};

    /* TODO: Add sliding animation. */
    /* https://stackoverflow.com/questions/30587900/css-margin-left-transition-not-working */
    margin-left: ${props => props.state === AuthFormState.Login ? '0' : 'auto'};
`;

export function AuthNavbar(props: any) {
    return (
        <AuthNav>
            <ButtonsContainer>
                <Button onClick={() => props.setState(AuthFormState.Login)}>Login</Button>
                <Button onClick={() => props.setState(AuthFormState.Register)}>Register</Button>
            </ButtonsContainer>
            <SlidingUnderline state={props.state} />
        </AuthNav>
    );
}
