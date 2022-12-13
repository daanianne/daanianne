import * as React from 'react';
import {
    StyledBanner,
    StyledBannerShoulder,
    StyledBannerMain,
    StyledBannerTitle,
    StyledBannerContent,
    StyledBannerSubContent,
} from './index.style';


export interface IProps {
    title: string;
    content: string;
    subContent?: string;
    color: string;
}

const Banner: React.FC<IProps> = (props: IProps) => {
    const {
        title,
        content,
        subContent,
        color,
    } = props;
    
    return (
        <StyledBanner color={color}>
            <StyledBannerShoulder />
            <StyledBannerMain>
                <StyledBannerTitle>
                    {title}
                </StyledBannerTitle>
                <StyledBannerContent>
                    {content}
                </StyledBannerContent>
                {
                    subContent ?
                    <StyledBannerSubContent>{subContent}</StyledBannerSubContent>
                    :
                    <></>
                }
            </StyledBannerMain>
            <StyledBannerShoulder />
        </StyledBanner>
    );
};

export default Banner;