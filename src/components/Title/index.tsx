import * as React from 'react'
import styled from "styled-components";
import { useIsMobile } from '../../hooks';

const StyledTitle = styled.h1<{
    color?: string;
    italic?: boolean;
    isMobile?: boolean;
}>`
    color: ${props => props.color || '#000'};
    ${props => props.italic ? 'font-style: italic;' : ''}
    ${props => props.isMobile ? 'font-size: 20px;' : ''}
`;



export interface IProps extends React.HTMLProps<HTMLDivElement> {
    color?: string;
    italic?: boolean;
}

const Title: React.FC<IProps> = (props: IProps) => {
    const {
        color,
        italic,
        style,
    } = props;

    const isMobile = useIsMobile();
    
    return (
        <StyledTitle
            isMobile={isMobile}
            color={color}
            italic={italic}
            style={style}
        >
            {props.children}
        </StyledTitle>
    )
}

export default Title;