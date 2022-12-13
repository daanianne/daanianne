import * as React from 'react'
import {
    Banner,
    Content,
    Paragraph,
    Title,
    Subtitle,
    Section,
} from '../../../components';
import { useIsMobile } from '../../../hooks';
import { getImageUrl } from '../../../utils';
import {
    StyledSmartMirror,
    StyledRow,
    StyledImg,
} from './index.style';

export interface IProps {
    
}

const color = '#EFB877';

const SmartMirror: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();
    
    return (
        <>
            <Banner
                color={'#EFB877'}
                title={'Smart Mirror'}
                content={'Made to simplify morning routines and ease into the day'}
                subContent={'*This research was conducted in March 2021'}
            />
            <Content>
                <StyledSmartMirror>
                    <Section
                        title={'Problem Space'}
                        color={color}
                        defaultOpen={true}
                    >
                            <Paragraph>
                                How can we simplify morning routines especially when running behind?
                            </Paragraph>
                    </Section>
                    <Section title={'Solution'} color={color}>
                        <Paragraph>
                            Mornings are flustering enough especially when you are in a rush, the Smart Mirror is a tool to help organise your morning so you can have a clear head to start the day.  
                        </Paragraph>
                        <Paragraph style={{ marginLeft: 20 }}>
                            <Subtitle italic={true}>
                                Goals and Wishes of the User
                            </Subtitle>
                        </Paragraph>
                        <Paragraph>
                            <ul>
                                <li>Customise their morning routine</li>
                                <li>One location for all the information they need to start the day</li>
                                <li>Ease morning routines, especially when in a rush</li>
                            </ul>
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Design Phase'}
                        color={color}
                        
                    >
                        <StyledRow>
                            <Paragraph>
                                <Subtitle italic={true}>
                                    Concept Idea
                                </Subtitle>
                                <ul>
                                    <li>Bluetooth and hands-free connection</li>
                                    <li>Anti-fog</li>
                                    <li>Wi-fi capabilities</li>
                                    <li>Touch screen for control</li>
                                    <li>Sync calendar, email, weather, other apps</li>
                                    <li>Speaker connections for voice assistant (Siri or Google)</li>
                                    <li>Siri or Google integration</li>
                                    <li>Similar to “OK Google, start my day” feature but with display</li>
                                    <li>Ex. when getting ready (brushing teeth, fixing hair, etc.)</li>
                                    <li>Like JARVIS in Iron Man</li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                <Subtitle italic={true}>
                                    "How might we..."
                                </Subtitle>
                                <ul>
                                    <li>Improve morning routines</li>
                                    <li>Simplify morning routines</li>
                                    <li>Sync all necessary information for the user in one accessible place</li>
                                    <li>Customise people's morning routines</li>
                                    <li>Coordinate tasks and information of the day for the user</li>
                                </ul>
                            </Paragraph>
                        </StyledRow>
                        <Paragraph>
                            Main connection capabilities are through the phone app which controls access to email, calendar, weather, health info, etc. to customise experience for each user based on what information they require in the morning 
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Research'}
                        color={color}
                        
                    >
                        <Paragraph>
                            Affinity Diagram to understand what mindset target user would be in when using the Smart Mirror
                        </Paragraph>
                        <div style={{textAlign:'center'}}>
                            <StyledImg
                                style={isMobile ? {maxWidth: 300} : {}}
                                src={getImageUrl('smart_mirror_research.png')}
                                alt={'Smart Mirror Research'}
                            />
                        </div>
                    </Section>
                    <Section
                        title={'User Scenario Testing'}
                        color={color}
                        
                    >
                        <Paragraph>
                            Mid-fi prototype screens of app connecting to Smart Mirror to customise experience.
                        </Paragraph>
                        <Paragraph>
                            <strong>User Task:</strong>&nbsp;signing into app, pairing Smart Mirror, and configuring to customise their display
                        </Paragraph>
                        <div style={{textAlign:'center'}}>
                            <StyledImg
                                style={isMobile ? {maxWidth: 300} : {}}
                                src={getImageUrl('smart_mirror_user_scenario.png')}
                                alt={'Smart Mirror User Scenario Testing'}
                            />
                        </div>
                        <Subtitle italic={true}>
                            User Testing Notes
                        </Subtitle>
                        
                        <Paragraph>
                            <ul>
                                <li>User is able to create account and sign in easily (Screen 1)</li>
                                <ul>
                                    <li>"Simple log in information and steps"</li>
                                </ul>
                                <li>Pair Smart Mirror to phone, assumed that SM is set up and plugged in, pop up screen saying display ready to pair (Screen 2)</li>
                                <ul>
                                    <li>"Easy to pair, similar to other Bluetooth devices"</li>
                                </ul>
                                <li>Connect apps already existing on phone to display on SM (Screen 3)</li>
                                <ul>
                                    <li>Able to choose which apps I want to display</li>
                                    <li>"Simple enough to choose from the list of existing apps I would have on my phone that I want for my daily overview on SM"</li>
                                </ul>
                                <li>Customise display (Screen 4 & 5)</li>
                                <ul>
                                    <li>"I assume I can just press and drag to customise the display"</li>
                                    <li>User was able to figure out how to move around apps that they chose to install</li>
                                    <li>User was able to customise size of widgets based on what information they wanted largest on screen of SM</li>
                                    <li>Looks like the Apple control centre that I am already familiar with, to customise</li>
                                </ul>
                            </ul>
                        </Paragraph>

                        <Paragraph>
                            *Testing complete and successful*
                        </Paragraph>
                        <Subtitle italic={true}>Post User Testing Notes</Subtitle>
                        <Paragraph>
                            <ul>
                                <li>Misunderstood the size of mirror and worried that there was no space for reflection</li>
                                <ul>
                                    <li>Had to explain display from App to Smart Mirror</li>
                                </ul>
                            </ul>
                        </Paragraph>
                    </Section>
                    <Section
                        title={'User Journey Map'}
                        color={color}
                        
                    >
                        <StyledRow style={{marginBottom: 8}}>
                            <StyledImg
                                style={{ marginRight: 8 }}
                                src={getImageUrl('smart_mirror_persona.png')}
                                alt={'Smart Mirror Persona'}
                            />
                            <Paragraph style={{marginTop: 0}}>
                                <strong>Persona:</strong>&nbsp;Alex<br/>
                                <strong>Scenario:</strong>&nbsp;Alex wants a customisable display for their daily overview placed in a strategic and useful location for everyday use<br/>
                                <strong>User Expectations:</strong>&nbsp;Makes morning routines much simpler to get ready for the day<br/>
                            </Paragraph>
                        </StyledRow>
                        <StyledImg
                            style={isMobile ? {maxWidth: 300} : {}}
                            src={getImageUrl('smart_mirror_journey_map.png')}
                            alt={'Smart Mirror Journey Map'}
                        />
                        <Subtitle>
                            Insights
                        </Subtitle>
                        <Paragraph>
                            <ul>
                                <li>Main goal for the user is to give them the information that they need to prepare for the day, in a convenient location while they are getting ready</li>
                                <li>Information such as weather, calendar events, and tasks to complete for the day, were the most mentioned during research and testing interviews</li>
                            </ul>
                        </Paragraph>
                        <Subtitle>
                            Internal Ownership
                        </Subtitle>
                        <Paragraph>
                            <ul>
                                <li>Track user activity, how they interact wit hSmart Mirror, how long is each use, and how frequently do they use it, to better upgrades and updates in future software</li>
                                <li>Personal and customisable executive assistant for people who cannot afford a real executive assistant</li>
                            </ul>
                        </Paragraph>
                    </Section>
                </StyledSmartMirror>
            </Content>
        </>
    )
}

export default SmartMirror