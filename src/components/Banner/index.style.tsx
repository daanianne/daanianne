import styled from "styled-components";

export const StyledBanner = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    text-align: center;
    padding: 80px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const StyledBannerShoulder = styled.div`
    flex: 1;
`;

export const StyledBannerMain = styled.div`
    flex: 4;
`;

export const StyledBannerTitle = styled.div`
    font-weight: 800;
    font-size: 48px;
    color: #fff;
    margin-bottom: 10px;
`;

export const StyledBannerContent = styled.div`
    font-weight: 700;
    font-style: italic;
    font-size: 24px;
    color: #fff;
`;

export const StyledBannerSubContent = styled.div`
    margin-top: 10px;
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    color: #fff;
`;