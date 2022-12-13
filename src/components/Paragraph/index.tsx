import * as React from 'react'
import styled from "styled-components";
import { useIsMobile } from '../../hooks';

const StyledParagraph = styled.p<{
    isMobile: boolean;
}>`
    font-weight: 500;
    font-size: ${props => props.isMobile ? '11px' : '16px'};
    color: #000;
`;

export interface IProps extends React.HTMLProps<HTMLParagraphElement> {
    
}

const Paragraph: React.FC<IProps> = (props: IProps) => {
    const {
        children,
        style,
    } = props;

    const isMobile = useIsMobile();
    
    return (
        <StyledParagraph
            isMobile={isMobile}
            style={style}
        >
            {children}
        </StyledParagraph>
    )
}

export default Paragraph;