import * as React from 'react'
import {
    Banner,
    Content,
    Paragraph,
    Title,
    Section,
    Subtitle,
} from '../../../components';
import { useIsMobile } from '../../../hooks';
import { getImageUrl } from '../../../utils';
import {
    StyledSubtleT,
    StyledRow,
    StyledImg,
} from './index.style';

export interface IProps {
    
}

const color = '#F97781';

const SubtleT: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();

    const TargetUser = (
        <Paragraph style={isMobile ? {marginLeft: 10} : {}}>
            <Subtitle italic={true} style={{ marginTop: -10 }}>Target User</Subtitle>
            <Paragraph>
                Emma is a 29 year old nurse who has been with her partner for over 7 years, and lived together for the last 4 years. Over the past 4 years, she has become a victim of domestic and verbal abuse. In the beginning, her friends would tell her their worries but would brush them aside. Slowly she has lost almost all of her friends because she would defend her abuser. Now she wants to leave the relationship but does not know how to safely.
            </Paragraph>
        </Paragraph>
    );

    const UserImage = (
        <>
            <StyledImg
                style={isMobile ? {maxWidth: 100} : {}}
                src={getImageUrl('subtle_t_persona.png')}
                alt={'Subtle-T Persona'}
            />
            <Paragraph style={{
                color: "#F97781", fontSize: 14, fontStyle: 'italic', marginTop: 0, textAlign: 'center', fontWeight: 700 }}
            >
                Emma
            </Paragraph>
            <Paragraph>
                <strong>Age:</strong>&nbsp;29<br/>
                <strong>Job:</strong>&nbsp;Nurse<br/>
                <strong>Location:</strong>&nbsp;Toronto, ON<br/>
            </Paragraph>
        </>
    )

    const UserGoals = (
        <Paragraph>
            <Subtitle italic={true} style={{ marginTop: -10 }}>User Goals</Subtitle>
            <ul>
                <li>Access to social workers and counselors for advice</li>
                <li>Shelter's nearby and contact information</li>
                <li>Password protected app in case partner checks phone regularly</li>
                <li>Able to hide app icon on  home screen to avoid detection</li>
                <li>"Check In" ability for friends/family with the app to monitor user's home situation</li>
                <li>Store photos as evidence if user eventually wants to press charges</li>
            </ul>
        </Paragraph>
    );

    const UserQuote = (
        <Paragraph
            style={{
                color: '#F97781',
                fontSize: 20,
                textAlign: 'center'
            }}
        >
            "I don't know who I am anymore, but I don't know how to leave."
        </Paragraph>
    );

    const LofiSketchDescription = (
        <div>
            <Paragraph>
                I wanted to create an app where all the proper resources needed for domestic violence victims can be found in a safe and protected place.
            </Paragraph>
            <Paragraph>
                In 2019, there were over 107,000 victims of police-reported intimate partner violence. Women accounted for almost 8 in 10 victims of all incidents.
            </Paragraph>
        </div>
    );

    const UserFlow = (
        <Paragraph>
            When user first enters the app, they have two options of how they want to register. The user can register for an account for themselves or on behalf of someone else if they are in a delicate situation. In this analysis, we will be following creating an account option for Myself.
        </Paragraph>
    );
    
    const PostUserFlow = (
        <div>
            <Paragraph>
                After completing the screens for setting up an account, the user will be able to customise their experience by choosing what sort of articles and references they would like access to. This can be changed in the app settings under profile.
            </Paragraph>
            <Paragraph>
                The screen on the right is to understand the user's situation so social workers and counsellors they may chat with can also have that information in order to help them.
            </Paragraph>
            <Paragraph>
                The menu bar is located at the bottom on the screen so it is the most accessible for the user as well as it is the most common mobile design for apps, therefore easy to use and quick to learn.
            </Paragraph>
        </div>
    );

    return (
        <>
            <Banner
                color={'#F97781'}
                title={'Subtle-T'}
                content={'An app made to help those who are experiencing domestic abuse and need access to resources they need to help them determine a course of action and a safety plan to leave their situation discreetly'}
                subContent={'*This research was conducted in January 2021'}
            />
            <Content>
                <StyledSubtleT>
                    <Section
                        title={'Problem Space'}
                        color={color}
                        defaultOpen={true}
                    >
                        <Paragraph>
                            As the pandemic drags on, the amount of domestic abuse victims increases . The majority of domestic abuse victims are women who do may not have the ability to defend themselves.
                        </Paragraph>
                        <Paragraph style={{ marginLeft: 20 }}>
                            "Intimate-partner violence is a serious crime that affects Canadians from coast to coast., in both urban and rural areas. It often takes place behind closed doors and can make the victim, who are typically women, feel isolated and afraid." - The Honourable Bill Blair, Minister of Public Safety and Emergency Preparedness
                        </Paragraph>
                        <Paragraph>
                            The most dangerous time for a women is when she tries to leave her abuser. About 26% of all women who are murdered by their spouse had left the relationship.
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Solution'}
                        color={color}
                    >
                        <Paragraph>
                            <Subtitle italic={true}>Subtle-T</Subtitle>
                            <Paragraph>
                                This app made to help those who are experiencing domestic abuse and need access to the resources to help them determine a course of action and a plan to leave as quickly and quietly as possible
                            </Paragraph>
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Persona'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column' } : {}}>
                            <div style={isMobile ? 
                                {display: 'flex', flexDirection: 'row'} : {}
                            }>
                                {
                                    isMobile ?
                                    (
                                        <div>
                                            {UserImage}
                                        </div>
                                    )
                                    :
                                    (UserImage)
                                }
                                {isMobile ? TargetUser : <></>}
                            </div>
                            { isMobile ? UserQuote : <></> }
                            <div>
                                <StyledRow>
                                    {
                                        isMobile ?
                                        <></>
                                        :
                                        (
                                            <>
                                                <div style={{ flex: 1, marginLeft: isMobile ? 0 : 20 }}>
                                                    {TargetUser}
                                                </div>
                                                <div style={{ flex: 1, marginLeft: 20 }}>
                                                    {UserGoals}
                                                </div>
                                            </>
                                        )
                                    }
                                </StyledRow>
                                { isMobile ? UserGoals : <></> }
                                <StyledRow style={{ alignItems: 'center' }}>
                                    <div style={isMobile ? {} : { marginLeft: 20 }}>
                                        <Subtitle italic={true} style={{ marginTop: 0 }}>User Pain Points</Subtitle>
                                        <Paragraph>
                                            <ul>
                                                <li>Too many steps to make an account or log information; needs to be discreet</li>
                                                <li>No flashy notifications or icon to avoid attracting attention in case abusive partner checks phone regularly</li>
                                                <li>If using mobile device, layout of app needs to be easy to use with one hand in case of emergency to send notification to Emergency Contact</li>
                                            </ul>
                                        </Paragraph>
                                    </div>
                                    <div>
                                        {isMobile ? <></> : UserQuote}
                                    </div>
                                </StyledRow>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'Research'}
                        color={color}
                    >
                        <StyledRow>
                            <Paragraph>
                                <ul>
                                    <li>67% of Canadians know a woman who has experienced physical or sexual abuse</li>
                                    <li>6x Indigenous women are killed at six times the rate of non- indigenous women</li>
                                    <li>6,000+ women and children sleep in shelters on any given night because it isn't safe at home</li>
                                </ul>
                            </Paragraph>
                            <Paragraph>
                                <ul>
                                    <li>About 70% of spousal violence is not reported to the police</li>
                                    <li>1 of 3 workers have experienced domestic violence in their lifetime. 83% found that domestic violence negatively affected their work performance</li>
                                </ul>
                            </Paragraph>
                        </StyledRow>
                        <Subtitle italic={true}>How to design an app to help domestic violence victims without putting them in danger?</Subtitle>
                        <Paragraph style={{marginLeft: 20}}>
                            <Subtitle italic={true}>Gaps in Industry</Subtitle>
                            <ul>
                                <li>A lot of research and information about domestic violence, but difficult to find immediate help info</li>
                                <li>Not many apps that help assist domestic violence victims, mainly designed to help with coping</li>
                            </ul>
                        </Paragraph>
                        <Paragraph style={{marginLeft:20}}>
                            <Subtitle italic={true}>Concept Design Ideas</Subtitle>
                            <ul>
                                <li>Password protected in case partner goes through their devices</li>
                                <li>Access to counsellors and social workers to talk with</li>
                                <li>Ability to send updates to emergency contact(s) of their situation</li>
                                <li>Designed to look like a menstruation tracking app to avoid suspicion</li>
                                <li>Colours used are feminine and “girly” to avoid detection, but user have the option to hide the app icon so it is not present on their home screen</li>
                            </ul>
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Lo-fi Sketches'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? {flexDirection: 'column', alignItems: 'center'} : {}}>
                            {LofiSketchDescription}
                            <StyledImg
                                style={{ marginLeft: 20 }}
                                src={getImageUrl('subtle_t_lofi_sketch_1.png')}
                                alt={'Subtle-T Lo-fi Sketch 1'}
                            />
                            <StyledImg
                                style={{ marginTop: 50, marginLeft: 20 }}
                                src={getImageUrl('subtle_t_lofi_sketch_2.png')}
                                alt={'Subtle-T Lo-fi Sketch 2'}
                            />                            
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Experience Map'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? {flexDirection: 'column', alignItems: 'center'} : {}}>
                            <Paragraph>
                                <ul>
                                    <li>Designed to optimise mobile interface design, ability to navigate the app with one hand.</li>
                                    <li>Contact emergency services button on bottom menu bar for easy access in case user only has one had available</li>
                                    <li>Simple screen design, using minimal colours and proper contrast against background for maximum visibility and accessibility</li>
                                    <li>Following eye patter used on mobile users, main information is located in the centre of the screen</li>
                                    <li>Designed with intent to influence behaviour to give as much necessary information to properly understand the user's main goal and determine the severity of their situation</li>
                                    <li>Gamified risk analysis screen every time user inputs their information with a score of predicted severity of the situation</li>
                                </ul>
                            </Paragraph>
                            <StyledImg
                                style={{ maxHeight: 300 }}
                                src={getImageUrl('subtle_t_user_experience_map.png')}
                                alt={'User Experience Map'}
                            />
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Scenarios'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? {flexDirection: 'column-reverse', alignItems: 'center'} : {}}>
                            <StyledImg
                                style={isMobile ? {maxWidth: 200} : { marginRight: 20, maxHeight: 400 }}
                                src={getImageUrl('subtle_t_user_scenarios.png')}
                                alt={'Subtle-T User Scenarios'}
                            />
                            <Paragraph style={{ lineHeight: '25px' }}>
                                <strong style={{ textDecoration: 'underline' }}>Definitions:</strong>&nbsp;There are 6 types of abuse, however, most only know about Physical and Sexual abuse. This is to help victims and their friends learn the different definitions of abuse and how they can help.<br/>
                                <strong style={{ textDecoration: 'underline' }}>Resources:</strong>&nbsp;Contact information about women's shelters nearby and social workers to message. Nearest emergency services based on geo- location.<br/>
                                <strong style={{ textDecoration: 'underline' }}>Checklist:</strong>&nbsp;A checklist of what to do when preparing to leave your abuser.<br/>
                                <strong style={{ textDecoration: 'underline' }}>Physical Support:</strong>&nbsp;Collaborate with social workers and therapists to be on call to message victims who reach out for help and advice.<br/>
                                <strong style={{ textDecoration: 'underline' }}>Mental Support:</strong>&nbsp;Having access to social workers and therapists helps alleviate the mental toll substantially when dealing and living with an abuser. Social workers can help plan a course of action for leaving their abuser without raising suspicion.<br/>
                                <strong style={{ textDecoration: 'underline' }}>Emotional Support:</strong>&nbsp;Friends and family of victims can also download the app to keep contact with the victim (similar to sharing location on Find My Friends or status updates of peers on a video game).<br/>
                            </Paragraph>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'Journey Map'}
                        color={color}
                    >
                        <StyledRow>
                            <StyledImg
                                style={{ maxHeight: 100, marginRight: 20 }}
                                src={getImageUrl('subtle_t_persona.png')}
                                alt={'Subtle-T Person'}
                            />
                            <Paragraph style={{ marginTop: 0 }}>
                                <strong>Target User:</strong>&nbsp;Emma wants to find the resources to help her leave her abusive partner. She needs a place to collect all the information she needs without raising suspicion and a secure place where she knows her partner cannot access. Emma's sister also check's in on her well- being, but they are unable to go into depth unless they meet up alone
                            </Paragraph>
                            {
                                isMobile ?
                                <></>
                                :
                                <Paragraph style={{ marginTop: 0 }}>
                                    <strong>Goals & Expectations:</strong>&nbsp;Emma's primary goal is to find the proper resources to help her leave her abusive home safely. She has lost many of her old friends and has very few people she can turn to for help. Emma's main goal is to come up with a plan to leave her abuser, without him knowing, and eventually file a restraining order against him
                                </Paragraph>
                            }
                        </StyledRow>
                        {
                            isMobile ?
                            <Paragraph style={{ marginTop: 0 }}>
                                <strong>Goals & Expectations:</strong>&nbsp;Emma's primary goal is to find the proper resources to help her leave her abusive home safely. She has lost many of her old friends and has very few people she can turn to for help. Emma's main goal is to come up with a plan to leave her abuser, without him knowing, and eventually file a restraining order against him
                            </Paragraph>
                            :
                            <></>
                        }
                        <StyledImg
                            style={isMobile ? {maxWidth: 300} : {}}
                            src={getImageUrl('subtle_t_journey_map.png')}
                            alt={'Subtle-T User Journey Map'}
                        />
                        <StyledImg
                            style={isMobile ? {maxWidth: 300} : {}}
                            src={getImageUrl('subtle_t_journey_map_chart.png')}
                            alt={'Subtle-T User Journey Map Chart'}
                        />
                    </Section>
                    <Section
                        title={'User Flow'}
                        color={color}
                    >
                        <StyledRow style={{ alignItems: 'center' }}>
                            <StyledImg
                                style={{ maxHeight: isMobile ? 200 : 300 }}
                                src={getImageUrl('subtle_t_user_flow_1.png')}
                                alt={'Subtle-T User Flow 1'}
                            />
                            <StyledImg
                                style={{ marginLeft: 20, marginRight: 20, maxHeight: isMobile ? 200 : 300 }}
                                src={getImageUrl('subtle_t_user_flow_2.png')}
                                alt={'Subtle-T User Flow 2'}
                            />
                            <StyledImg
                                style={{ maxHeight: isMobile ? 200 : 300, marginRight: 20 }}
                                src={getImageUrl('subtle_t_user_flow_3.png')}
                                alt={'Subtle-T User Flow 3'}
                            />
                            {isMobile ? <></> : UserFlow}
                        </StyledRow>
                        {isMobile ? UserFlow : <></>}
                        <StyledRow style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
                            {PostUserFlow}
                            <StyledImg
                                style={{ marginLeft: 20, maxHeight: 300 }}
                                src={getImageUrl('subtle_t_user_flow_4.png')}
                                alt={'Subtle-T User Flow 4'}
                            />
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Flow - Home Screen'}
                        color={color}
                    >
                        <StyledRow style={{ flexDirection: isMobile ? 'column-reverse' : 'row', alignItems: 'center' }}>
                            <div>
                                <Paragraph>
                                    Main home screen is designed to look like a menstruation tracking app to defer suspicion. Top corners have access to main screen and chat inbox where user can contact social workers, counsellors, and their contacts to give a status update of their well-being.
                                </Paragraph>
                                <Paragraph>
                                    Calendar can be used to log information, mimicking a menstruation app, however the information that is collected is specific for domestic violence victims.
                                </Paragraph>
                                <Paragraph>
                                    Articles and blogs are also available for users to browse through to understand their situation and how to plan a course of action to leave.
                                </Paragraph>
                                <Paragraph>
                                    Bottom menu bar allows easy access a number of services such as:
                                    <ul>
                                        <li>A to a map of safe locations around the user (shelters, bars/restaurants with “safe words”, and emergency services</li>
                                        <li>Ping emergency contact(s) their location</li>
                                        <li>Profile to customise settings of the app and view checklists saved to help them leave their partner as safely as possible</li>
                                        <li>Contact emergency services, call or text in case they are unable to speak freely</li>
                                    </ul>
                                </Paragraph>
                            </div>
                            <StyledImg
                                style={isMobile ? {maxHeight: 200} : { marginLeft: 20 }}
                                src={getImageUrl('subtle_t_user_flow_5.png')}
                                alt={'Subtle-T User Flow 5'}
                            />
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Flow - Day View'}
                        color={color}
                    >
                        <StyledRow style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
                            <StyledImg
                                style={isMobile ? {maxHeight: 200} : { marginRight: 20 }}
                                src={getImageUrl('subtle_t_user_flow_6.png')}
                                alt={'Subtle-T User Flow 6'}
                            />
                            <div>
                                <Paragraph>
                                    When a specific day is selected, the user is able to log information. The main screen of a specific day is, again, designed to imitate a menstruation tracking app, hence the language used.
                                </Paragraph>
                                <Paragraph>
                                    Similar options are available from the previous month view screen. When information is logged, a pink dot will appear below the date to note that there is information logged. User is able to shift between weeks or go back to calendar view. This is to encourage the user to use the logging ability of the app
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Flow - Log Symptoms'}
                        color={color}
                    >
                        <StyledRow style={{ flexDirection: isMobile ? 'column-reverse' : 'row', alignItems: 'center' }}>
                            <div>
                                <Paragraph>
                                    When logging symptoms, it is really to log information of how the user is feeling during or after a situation with their partner. User is able to log the activity (type of abuse that took place), and symptoms of the aftermath (bruising, cuts, etc). Mood is to track their emotions of the situation and keep a diary or journal under How Are You.
                                <Paragraph>
                                    In this screen, the user is able to upload photos that can be saved on the app only, and not on their device.                                </Paragraph>
                                </Paragraph>
                            </div>
                            <StyledImg
                                style={isMobile ? {maxHeight: 200} : { marginLeft: 20 }}
                                src={getImageUrl('subtle_t_user_flow_7.png')}
                                alt={'Subtle-T User Flow 7'}
                            />
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Flow - Risk Analysis'}
                        color={color}
                    >
                        <StyledRow style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
                            <StyledImg
                                style={isMobile ? {maxHeight: 200} : { marginRight: 20 }}
                                src={getImageUrl('subtle_t_user_flow_8.png')}
                                alt={'Subtle-T User Flow 8'}
                            />
                            <div>
                                <Paragraph>
                                    After the user has logged their information, the app will determine a risk analysis score based on their previous information they have inputted and so that they are able to comprehend the severity of their situation with a scoring system.
                                <Paragraph>
                                    In addition to the typical options at the bottom of the screen, the user is able to export their history of their use on the app with photos, symptoms, journal logs, and calendar updates via email if they wish to press charges against their abuser and have a restraining order against them.                                </Paragraph>
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'Styling'}
                        color={color}
                    >
                        <StyledRow style={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
                            <div style={{ flex:1}} />
                            <StyledImg
                                style={{ maxHeight: 50 }}
                                src={getImageUrl('subtle_t_logo.png')}
                                alt={'Subtle-T Logo'}
                            />
                            <div style={{ flex:1}} />
                        </StyledRow>
                        <StyledRow>
                            <div style={{ flex: 1, marginRight: 10 }}>
                                <Paragraph>
                                    The World Health Organisation indicated that about 1 in 3 (30) of women globally have been subjected to either physical and/or sexual intimate partner or non-partner sexual violence in their lifetime.
                                </Paragraph>
                                <Paragraph>
                                    <span style={{ color, fontWeight: 500 }}>Subtle-T</span> is designed to help those victims in these situations to escape their abuser and regain their freedom and independence.
                                    Pink is often described to be a girly and feminine colour, and males typically associate the colour to female products. Pink in this case, is used against the masculine cognitive behaviour to avoid most feminine products and avoid detection.
                                </Paragraph>
                            </div>
                            <div style={{flex:1, marginLeft: 10 }}>
                                <Paragraph>
                                    The name <span style={{ color, fontWeight: 500 }}>Subtle-T</span> can also be associated to menstruation. When growing up, many young women are taught to be discreet about their periods and hide their products. Abuse victims are told to remain subtle and avoid bringing attention to their situation.
                                </Paragraph>
                                <Paragraph>
                                    This mimics the entire mentality of the app design, to avoid detection from their abuser, but aiding themselves to escape.
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                </StyledSubtleT>
            </Content>
        </>
    )
}

export default SubtleT