import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledGrid = styled.div<{ isMobile: boolean }>`
    width: ${props => props.isMobile ? 'unset' : '100%'};
`;

export const StyledGridRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 20px 0;
`;