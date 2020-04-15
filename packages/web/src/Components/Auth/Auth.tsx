import React from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from './RegisterForm';

export function Auth() {
    return (
        <div>
            <LoginForm />
            <RegisterForm />
        </div>
    );
}