import {css, jsx} from '@emotion/core';
/** @jsx jsx */
import styled from '@emotion/styled';

export const Panel = styled.div`
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    padding: 0 2rem;
    @media only screen and (max-device-width: 480px) {
        padding: 0 1rem;
    }
`;

export const HorizontalLine = styled.hr`
    border-top: 1px solid #9F2D20;
`;