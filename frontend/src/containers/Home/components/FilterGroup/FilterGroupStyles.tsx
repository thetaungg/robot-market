import { css } from '@emotion/react';

export const container = css`
    display: flex;
`;

export const inputContainer = css`
    input {
        background-color: #f5f5f5;
        outline: none;
        padding: 1rem 1.5rem;
        border: 1px solid #424242;
        border-radius: 0.5rem;
        font-size: 2rem;
        font-family: inherit;
    }
`;

export const selectContainer = css`
    margin-left: 10px;

    select {
        height: 100%;
        font-family: inherit;
        font-size: 1.8rem;
        background-color: #f5f5f5;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        outline: none;
    }
`;
