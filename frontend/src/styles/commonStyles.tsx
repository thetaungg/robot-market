import { css } from '@emotion/react';

export const row = css`
    display: flex;
`;

// row with vertically centered items
export const vtCenteredRow = css`
    display: flex;
    align-items: center;
`;

// row with horizontally centered items
export const hzCenteredRow = css`
    display: flex;
    justify-content: center;
`;

export const justifyFLexEndRow = css`
    display: flex;
    justify-content: flex-end;
`;

// row with vertically and horizontally centered items
export const vtNhzCenteredRow = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

// row with space-between items
export const spBtRow = css`
    display: flex;
    justify-content: space-between;
`;

export const col = css`
    display: flex;
    flex-direction: column;
`;

// column with vertically centered items
export const vtCenteredCol = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// column with horizontally centered items
export const hzCenteredCol = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// row with vertically and horizontally centered items
export const vtNhzCenteredCol = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const dashboardHeading = css`
    font-size: 2.5rem;
    margin-bottom: 4rem;
`;

export const label = css`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    width: fit-content;
`;

export const dashboardPopupItem = css`
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export const modalHeading = css`
    font-size: 2rem;
    font-weight: 600;
`;

export const modalBody = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 1.5rem;
`;

export const modalBtnsContainer = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const error = css`
    font-size: 1.5rem;
    color: #db1f48;
`;
