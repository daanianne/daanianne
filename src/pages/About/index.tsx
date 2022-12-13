import * as React from 'react';
import {
    Content,
    Paragraph,
    Title,
} from '../../components';
import { useIsMobile } from '../../hooks';
import {
    StyledAbout,
    StyledAboutContent,
    StyledAboutDetails,
    StyledAboutDetailsItem,
    StyledAboutDetailsItemContent,
    StyledAboutDetailsItemTitle,
    StyledAboutDetailsRow,
    StyledAboutImage,
    StyledAboutIntro,
} from './index.style';
import { getImageUrl } from '../../utils';


type AboutDetails = {
    title: string;
    content: string;
};

const aboutDetails: AboutDetails[] = [
    {
        title: "User Research",
        content: "I believe user research is one of the most important steps in design to properly understand who you are trying to design for and problem you are trying to solve before starting anything.",
    },
    {
        title: "User Interface Design",
        content: "I am a skilled UI Designer with an eye for detail. Focused on layout flow, graphics, alignment, and colours. I love to build web and mobile designs with simplicity and modern aesthetics.",
    },
    {
        title: "Ideation & Prototyping",
        content: "I love bringing ideas to life to touch, feel and experiment with. One of the most important aspects to design is prototyping and testing. I typically use Figma, Sketch and Miro to wireframe and prototype designs.",
    },
    {
        title: "Project Management",
        content: "I manage multiple clients, campaigns, and projects at a time. Project management is a key asset in order to keep organised especially in design and marketing ",
    },
    {
        title: "Front End Development",
        content: "I can create, develop, and manage web designs for front-end development using CSS, HTML, and JavaScript",
    },
    {
        title: "Inclusive Design",
        content: "I believe design should cater towards all people, not just cis-gender, able bodies. Design should always be made with inclusivity and accessibility for all people",
    },
];

export interface IProps {
    
}

const About: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();

    const aboutDetailsPerRow = isMobile ? 1 : 3;

    const aboutDetailsRows: AboutDetails[][] = React.useMemo(() => {
        return aboutDetails.reduce((acc, curr) => {
            if (acc.length === 0) {
                acc.push([]);
            }

            if (acc[acc.length-1].length === aboutDetailsPerRow) {
                acc.push([]);
            }
            
            acc[acc.length-1].push(curr);

            return acc;
        }, [] as AboutDetails[][]);
    }, [aboutDetailsPerRow]);

    const Intro = (
        <div>
            <Title
                color={'#1494F0'}
                italic={true}
            >
                Hello! 👋
            </Title>
            <Paragraph>
                I'm Danielle, a UX/UI Designer. I love to create and solve meaningful problems in a digital and physical ecosystem. I wish to tell stories through my designs so that the end-user goals are achieved by transforming complex problems into experiences. 
            </Paragraph>
            <Paragraph>
                I have a multidisciplinary background in Political Science, Digital Marketing, and Design and Research. These help me create meaningful designs that help long-term relationships between the business and target user through ideation, concept creation, and experience innovation. 
            </Paragraph>
        </div>
    );

    const AboutDetails = (
        <>
            <Paragraph>
                What I am passionate about:
            </Paragraph>
            <Paragraph>
                <ul style={isMobile ? { paddingInlineStart: 20 } : {}}>
                    <li>Product & Tech; I am always looking for ways to expand my skills and push the limits of what technologies have to offer</li>
                    <li>Human Centred Design (HCD) research understanding problems, the constraints of the problems and finding solutions for them in a human-centred perspective</li>
                    <li>Sports! I grew up in a competitive family and used to compete in tennis, rowing, and golf</li>
                </ul>
            </Paragraph>
        </>
    );
    
    return (
        <Content>
            <StyledAbout>
                <StyledAboutContent isMobile={isMobile}>
                    {
                        isMobile ? Intro : <></>
                    }
                    <StyledAboutImage
                        src={getImageUrl('about.jpg')}
                        alt={'Danielle Humilde'}
                        show={!isMobile}
                    />
                    <StyledAboutIntro isMobile={isMobile}>
                        { isMobile ? <></> : Intro }
                        <StyledAboutImage
                            style={{ maxHeight: 150, marginTop: 15 }}
                            src={getImageUrl('about.jpg')}
                            alt={'Danielle Humilde'}
                            show={isMobile}
                        />
                        {
                            isMobile ?
                            <div>
                                {AboutDetails}
                            </div>
                            :
                            AboutDetails
                        }
                    </StyledAboutIntro>
                </StyledAboutContent>
                <StyledAboutDetails>
                    <tbody>
                        {
                            aboutDetailsRows.map((aboutDetailsRow, index) => (
                                <StyledAboutDetailsRow
                                    key={index}
                                >
                                    {
                                        aboutDetailsRow.map(aboutDetailsItem => (
                                            <StyledAboutDetailsItem key={aboutDetailsItem.title}>
                                                <StyledAboutDetailsItemTitle>
                                                    {aboutDetailsItem.title}
                                                </StyledAboutDetailsItemTitle>
                                                <StyledAboutDetailsItemContent>
                                                    {aboutDetailsItem.content}
                                                </StyledAboutDetailsItemContent>
                                            </StyledAboutDetailsItem>
                                        ))
                                    }
                                </StyledAboutDetailsRow>    
                            ))
                        }
                    </tbody>
                </StyledAboutDetails>
            </StyledAbout>
        </Content>
    )
}

export default About