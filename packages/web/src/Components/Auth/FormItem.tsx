import styled from 'styled-components';
import { AuthFormColors } from './AuthFormColors';

/**
    FormItem может быть и не дивом, а кнопкой.
    https://styled-components.com/docs/api#as-polymorphic-prop
*/
export const FormItem = styled.div<{errorMessage?: string}>`
    display: flex;

    &:not(:first-child) {
        margin-top: 14px;
    }

    position: relative;

    &:hover:after {
        content: ${props => props.errorMessage && ("'" + props.errorMessage + "'")};
        z-index: 1;
        display: block;
        padding: 5px 10px;
        border: 3px solid ${AuthFormColors.SoftRed};
        background: #C4C4C4;

        position: absolute;
        bottom: -31px;
        right: 0;
    }

`;