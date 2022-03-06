import { css } from '@emotion/react';

export const label = (position: 'top' | 'bottom') => css`
    position: absolute;
    ${position === 'top'
        ? `
            top: -1rem;
            left: -0.5rem;
   `
        : `
             bottom: -1rem;
             right: -1.5rem;
    `};

    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;
`;
