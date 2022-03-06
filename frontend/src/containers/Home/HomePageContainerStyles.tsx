import { css } from '@emotion/react';

export const container = (background: any) => css`
    background-size: cover;
    background: url(${background}) repeat-y fixed 50% 50%;
    min-height: 100vh;
`;
