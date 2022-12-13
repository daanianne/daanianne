import styled from "styled-components";
import { useIsMobile } from "../../hooks";

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const StyledContentShoulder = styled.div`
    flex: 1;
`;

const StyledContentMain = styled.div<{
    isMobile: boolean;
}>`
    flex: ${props => props.isMobile ? '10' : '4'};
    max-width: ${props => props.isMobile ? 'unset' : '66%'};
`;

const Content: React.FC<{}> = ({ children }) => {
    const isMobile = useIsMobile();

    return (
        <StyledContent>
            <StyledContentShoulder />
            <StyledContentMain isMobile={isMobile}>
                {children}
            </StyledContentMain>
            <StyledContentShoulder />
        </StyledContent>
    );
};

export default Content;