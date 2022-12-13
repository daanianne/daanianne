import styled from "styled-components";
import { Title } from '../../components';

export const StyledAbout = styled.div`

`;

export const StyledAboutContent = styled.div<{
    isMobile: boolean;
}>`
    display: flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    align-items: flex-start;
`;

export const StyledAboutImage = styled.img<{
    show: boolean;
}>`
    ${props => props.show ? '' : 'display: none;'}
    margin-top: 30px;
    max-height: 350px;
    border-radius: 20px;
    margin-right: 20px;
`;

export const StyledAboutIntro = styled.div<{
    isMobile: boolean;
}>`
    ${props => props.isMobile ? `
        display: flex;
        flex-direction: row;
    ` : ''}
`;


export const StyledAboutDetails = styled.table`

`;

export const StyledAboutDetailsRow = styled.tr`

`;

export const StyledAboutDetailsItem = styled.td`
    text-align: left;
    vertical-align: top;
    padding: 0 20px;
`;

export const StyledAboutDetailsItemTitle = styled.div`
    margin-top: 60px;
    font-weight: 700;
    font-style: italic;
    font-size: 20px;
    color: #000;
    margin-bottom: 10px;
`;

export const StyledAboutDetailsItemContent = styled.div`
    font-weight: 400;
    font-style: italic;
    color: #696767;
`;
