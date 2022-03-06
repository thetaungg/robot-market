import { css } from '@emotion/react';

import { vtNhzCenteredRow } from '@/styles/commonStyles';

export const cart = css`
    position: fixed;
    top: 4rem;
    right: 4rem;
    z-index: 1000;
`;

export const button = css`
    ${vtNhzCenteredRow};
    border-radius: 50%;
    background-color: #fff;
    width: 6.5rem;
    height: 6.5rem;
    padding: 1rem;
    cursor: pointer;
    border: none;
    box-shadow: 0 0.5rem 1.5rem rgba(255, 255, 255, 0.3);

    svg {
        width: 4rem;
        height: auto;
        fill: #424242;
    }
`;

export const totalItems = css`
    font-size: 1.5rem;
    color: #e89005;
    font-weight: 700;
    position: absolute;
    margin-right: -0.8rem;
    margin-top: -0.3rem;
`;

export const cartContents = (isVisible: boolean) => css`
    display: ${isVisible ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: calc(100% + 1rem);
    right: 0;
    background-color: #fff;
    border-radius: 1rem;
    min-width: 30rem;
`;

export const itemsContainer = css`
    display: flex;
    flex-direction: column;
    max-height: 30rem;
    overflow-y: auto;
`;

export const messageContainer = css`
    padding: 2rem;
    text-align: center;

    p {
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

export const footer = css`
    padding: 2rem 2rem 1rem;
    border-top: 1px solid #f5f5f5;
    display: flex;
    flex-direction: column;
`;

export const footerTextsContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const totalPrice = css`
    font-size: 1.6rem;
    font-weight: 700;
    color: #2980b9;
`;

export const totalRobots = css`
    font-size: 1.6rem;
    font-weight: 700;
    color: #ef476f;
    margin-right: 3rem;
`;

export const checkoutButton = css`
    margin-top: 1rem;
    background-color: #e89005;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
`;
