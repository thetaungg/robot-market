import { css } from '@emotion/react';

import { spBtRow, vtNhzCenteredRow } from '@/styles/commonStyles';

export const card = css`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0.5rem 1rem 0 rgba(255, 255, 255, 0.25);
    border-radius: 2rem;
    overflow: hidden;
    background-color: transparent;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 0.5rem 1.5rem 0 rgba(255, 255, 255, 0.3);
    }
`;

export const image = css`
    width: 100%;
    height: 20rem;
    position: relative;

    img {
        position: absolute;
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
        object-fit: cover;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1rem;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
        background-color: #fff;
    }
`;

export const infoContainer = css`
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem 1rem;
    border-radius: 2rem;
    background-color: #ffffff;
    flex-grow: 1;
`;

export const row = css`
    ${spBtRow};
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 1.8rem;
    }
`;

export const name = css`
    font-size: 2rem;
    font-weight: 500;
`;

export const material = css`
    font-size: 1.5rem;
    position: relative;
    font-weight: 700;
`;

export const date = css`
    position: relative;
`;

export const infoLabel = css`
    position: absolute;
    top: -1rem;
    left: -0.5rem;
    font-size: 1rem;
    font-weight: 400;
`;

export const price = css`
    font-size: 1.8rem;
    color: #2980b9;
`;

export const stock = css`
    font-size: 2rem;
    font-weight: 500;
    color: #ef476f;
`;

export const button = css`
    ${vtNhzCenteredRow};

    border: none;
    flex-grow: 1;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 2rem;
    background-color: #e89005;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        cursor: auto;
        opacity: 0.6;
    }
`;

export const cartContainer = css`
    width: 1.8rem;
    margin-right: 1rem;

    svg {
        width: 100%;
        height: auto;
        fill: #fff;
    }
`;
