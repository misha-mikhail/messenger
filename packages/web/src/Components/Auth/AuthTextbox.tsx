import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { FormItem } from './FormItem';

const TextFormItem = styled(FormItem)`
    flex-direction: column;
    color: #777;

    > label {
        margin-left: 2px;
        font-size: 15px;
    }

    > input {
        color: #444;
        margin-top: 5px;

        font-size: 16px;
        padding: 8px 4px;
        caret-color: #777;
        border: 3px solid #DFDFDF;
        outline: none;
    }
`;

export function AuthTextboxFormItem(props: { label: string, value: string, type?: string, onInput: Dispatch<string> }) {
    return (
        <TextFormItem>
            <label>{props.label}</label>
            <input onChange={e => props.onInput(e.target.value)} value={props.value} type={props.type} />
        </TextFormItem>
    );
}
