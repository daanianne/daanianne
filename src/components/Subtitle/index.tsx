import * as React from 'react'
import styled from "styled-components";
import { useIsMobile } from '../../hooks';

const StyledSubtitle = styled.h4<{
    color?: string;
    italic?: boolean;
    isMobile: boolean;
}>`
    color: ${props => props.color || '#000'};
    ${props => props.italic ? 'font-style: italic;' : ''}
    ${props => props.isMobile ? 'font-size: 12px;' : ''}
`;

export interface IProps extends React.HTMLProps<HTMLDivElement> {
    color?: string;
    italic?: boolean;
}

const Subtitle: React.FC<IProps> = (props: IProps) => {
    const {
        color,
        italic,
        style,
    } = props;

    const isMobile = useIsMobile();
    
    return (
        <StyledSubtitle
            color={color}
            italic={italic}
            isMobile={isMobile}
            style={style}
        >
            {props.children}
        </StyledSubtitle>
    )
}

export default Subtitle;