import * as React from 'react'
import { downloadResume } from '../utils';
import {
    StyledFooter,
    StyledFooterShoulder,
    StyledFooterItem,
    StyledFooterGroup,
    StyledFooterIcon,
} from './index.style';
import { getImageUrl } from '../../utils';


export interface IProps {
    
}

const Footer: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const handleResumeClick = () => {
        downloadResume();
    };
    
    return (
        <StyledFooter>
            <StyledFooterShoulder />
            <StyledFooterGroup>
                <StyledFooterShoulder />
                <StyledFooterItem>
                    <a href={'mailto:d.humilde@outlook.com'}>
                        <StyledFooterIcon
                            src={getImageUrl('email.png')}
                            alt={'Email'}
                        />
                    </a>
                </StyledFooterItem>
                <StyledFooterItem>
                    <a href={'https://www.linkedin.com/in/danielle-humilde/'} target={'_blank'}>
                        <StyledFooterIcon
                            src={getImageUrl('linkedin.png')}
                            alt={'LinkedIn'}
                        />
                    </a>
                </StyledFooterItem>
                <StyledFooterItem>
                    <StyledFooterIcon
                        style={{ cursor: 'pointer' }}
                        src={getImageUrl('resume.png')}
                        alt={'Resume'}
                        onClick={() => handleResumeClick()}
                    />
                </StyledFooterItem>
                <StyledFooterShoulder />
            </StyledFooterGroup>
            <StyledFooterShoulder />
        </StyledFooter>
    )
}

export default Footer