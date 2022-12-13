import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`;

export const StyledNavbarGroup = styled.div<{ isMobile?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props=> props.isMobile ? 'width: 100%;' : ''}
`;

export const StyledNavbarItem = styled(Link)<{ isMobile?: boolean }>`
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    color: #696767;

    ${props => props.isMobile ? 'font-weight: 700;' : ''}

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const StyledMobileNavbar = styled.div<{open: boolean}>`
    background-color: #F4F4F4;
    width: 100%;
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

export const StyledMobileNavbarShoulder = styled.div`
    flex: 1;
`;

export const StyledMobileNavbarDropdown = styled.div<{ open: boolean }>`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const StyledMobileNavbarDropdownItem = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: #000;
    background-color: #fff;
    margin: 10px 0;
    padding: 5px;
    width: calc(100% - 80px);
    text-align: center;
`;