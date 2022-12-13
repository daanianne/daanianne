import * as React from 'react'
import {
    Content,
    Title,
    Paragraph,
} from '../../components'; 
import ProjectGrid from './ProjectGrid';
import {
    StyledHome,
} from './index.style';

export interface IProps {
    
}

const Home: React.FC<IProps> = (props: IProps) => {
    const {} = props;
    
    return (
        <Content>
            <StyledHome>
                <Title style={{ fontStyle: 'italic' }}>Hi! I'm Danielle Humilde</Title>
                <Paragraph>
                    My passion for design is to create inclusive and diverse interfaces for a wide array of user experiences.
                    I have professional experience in digital marketing and currently a Marketing Designer in the financial industry.
                    With my diverse educational background in Political Science, Digital Marketing and Design, I believe that it widens my perspective for a more holistic understanding of the end user.
                </Paragraph>

                <ProjectGrid />
            </StyledHome>
        </Content>
    )
}

export default Home