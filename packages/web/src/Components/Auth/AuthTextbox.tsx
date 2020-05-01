import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { FormItem } from './FormItem';
import { AuthFormColors } from './AuthFormColors';

const TextFormItem = styled(FormItem)`
    flex-direction: column;
    color: ${AuthFormColors.DarkestGray};

    > label {
        margin-left: 2px;
        font-size: 15px;
    }

    > input {
        color: #444;
        margin-top: 5px;

        font-size: 16px;
        padding: 8px 4px;
        caret-color: ${AuthFormColors.DarkestGray};
        border: 3px solid ${AuthFormColors.SoftGray};
        border-color: ${props => !props.errorMessage
                               ? AuthFormColors.SoftGray
                               : AuthFormColors.SoftRed };
        outline: none;
    }
`;

export function AuthTextbox(props: { label: string, value: string, type?: string, errorMessage?: string, onInput: Dispatch<string> }) {
    return (
        <TextFormItem errorMessage={props.errorMessage}>
            <label>{props.label}</label>
            <input onChange={e => props.onInput(e.target.value)} value={props.value} type={props.type} />
        </TextFormItem>
    );
}
