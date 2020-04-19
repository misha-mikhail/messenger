import styled from 'styled-components';

/**
    FormItem может быть и не дивом, а кнопкой.
    https://styled-components.com/docs/api#as-polymorphic-prop
*/
export const FormItem = styled.div`
    display: flex;

    &:not(:first-child) {
        margin-top: 14px;
    }
`;