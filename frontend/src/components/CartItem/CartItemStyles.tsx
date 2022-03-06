import { css } from '@emotion/react';

import { col } from '@/styles/commonStyles';

export const container = css`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem 1rem 0.5rem;

    &:not(:last-child) {
        border-bottom: 1px solid #f5f5f5;
    }
`;

export const imageContainer = css`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-right: 1rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const infoContainer = css`
    ${col};
    flex-grow: 1;
`;

export const row = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

export const name = css`
    font-weight: 500;
    font-size: 1.6rem;
`;

export const price = css`
    color: #2980b9;
    font-size: 1.5rem;
`;

export const buttonsContainer = css`
    display: flex;
    align-items: center;
    margin-left: 2rem;
`;

export const button = css`
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #eee;
    border-radius: 0.4rem;

    &:disabled {
        cursor: auto;
        opacity: 0.6;
    }

    svg {
        width: 1rem;
        height: 1rem;
        fill: #424242;
    }
`;

export const total = css`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 1rem;
    color: #ef476f;
`;
