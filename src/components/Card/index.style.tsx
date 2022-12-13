import styled from "styled-components";
import { DEFAULT_MOBILE_DEVICE_WIDTH_THRESHOLD } from '../../hooks/useIsMobile'

export const StyledCard = styled.div<{ color: string, isFirst?: boolean, isLast?: boolean }>`
    border-radius: 20px;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: ${props => {
        if (props.isFirst) {
            return '0 20px 0 0';
        }
        else if (props.isLast) {
            return '0 0 0 20px';
        }
        else {
            return '0 20px';
        }
    }};
    
    &:hover {
        & > div.card-content {
            opacity: 0.75;
        }
    }
`;

export const StyledCardImageShoulder = styled.div`
    flex: 1;
`;

export const StyledCardImageContainer = styled.div<{ _width: number }>`
    height: ${props => props._width > DEFAULT_MOBILE_DEVICE_WIDTH_THRESHOLD ? `${(props._width/3)-40}px` : `${2*props._width/3}px`};
    width: ${props => props._width > DEFAULT_MOBILE_DEVICE_WIDTH_THRESHOLD ? `${(props._width/3)-40}px` : `${2*props._width/3}px`};
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;

export const StyledCardImage = styled.img<{ _width: number }>`
    margin: auto;
    height: 75%;
    border-radius: 20px; /* images are poorly cropped */
`;

export const StyledCardContent = styled.div`
    position: absolute;
    opacity: 0; /* usually see through, this gets set when hover parent */
    background-color: #000;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;