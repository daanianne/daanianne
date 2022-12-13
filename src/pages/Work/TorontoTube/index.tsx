import * as React from 'react'
import {
    Banner,
    Content,
    Paragraph,
    Section,
    Subtitle,
    Title,
} from '../../../components';
import { useIsMobile } from '../../../hooks';
import { getImageUrl } from '../../../utils';
import {
    StyledTorontoTube,
    StyledRow,
    StyledImg,
} from './index.style';

export interface IProps {
    
}

const color = '#DECAF2';

const TorontoTube: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();
    
    return (
        <>
            <Banner
                color={'#DECAF2'}
                title={'Toronto Tube'}
                content={'An app design concept for Presto card users to adapt contactless payment similar to Apple Pay to enhance app capabilities*'}
                subContent={'*This research was conducted in January 2021'}
            />
            <Content>
                <StyledTorontoTube>
                    <Section
                        title={'Problem Space'}
                        color={color}
                        defaultOpen={true}
                    >
                        <Subtitle italic={true}>
                            How can we streamline the payment experience for TTC riders?
                        </Subtitle>
                        <Paragraph>
                            Toronto is one of the most well known cities in Canada, attracting thousands of tourists each year. With the current pandemic, many people are cautious about touching common surfaces. Having contactless payment methods on public transit may make users more comfortable with taking the TTC during this time.
                        </Paragraph>
                        <Paragraph>
                            My target audience is the tech savvy Millennial and older Gen Z age group who have adapted to contactless payment already such as Apple Pay.
                        </Paragraph>
                        <Paragraph>
                            Rather than having to carry multiple different bank and membership cards, many businesses have adapted to storing their user’s information on an app or mobile wallet.
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Solution'}
                        color={color}
                    >
                        <Paragraph>
                            For newcomers who just moved to Toronto, or visitors who want to explore the city, this Contactless Payment method allows the riders to have a much more seamless experience when riding the TTC. Rather than having to buy a pass at Shoppers Drug Mart, or last minute at a station, riders can just scan a QR code at a station to purchase a mobile card to load and ride the TTC as much or as little as they want.
                        </Paragraph>
                        <Paragraph>
                            My app is similar to <a href={'https://www.pcoptimum.ca/'} target={'_blank'}>PC Optimum</a>, <a href={'https://stocardapp.com/en/ca'} target={'_blank'}>Stocard</a>, and <a href={'https://www.apple.com/ca/apple-pay/'}  target={'_blank'}>Apple Pay</a> but for TTC riders to create a more seamless payment experience.
                        </Paragraph>
                        <Paragraph>
                            Whether they are infrequent TTC riders or people who just moved to the city, Toronto Tube is an app that allows its users to get from A to B without any detours.
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Research'}
                        color={color}
                    >
                        <Paragraph>
                            <Subtitle italic={true}>
                                Netnography (Reddit r/TTC)
                            </Subtitle>
                            <ul>
                                <li>Most forums discuss the new lines being made to expand the subway</li>
                                <li>Memes of how slow the development/upgrades of certain station and areas</li>
                                <li>Some videos being shared of comparing TTC to other transit systems around the world</li>
                                <li>Overall, sentiment is moderate about TTC. No one outwardly hating TTC or prasing it either</li>
                                <li>More of a question forum about developments about TTC and how it can be improved based on expamples of transit systems in other cities around the world</li>
                            </ul>
                        </Paragraph>
                        <Paragraph>
                            <Subtitle italic={true}>
                                Auto-ethnography
                            </Subtitle>
                            <ul>
                                <li>All 3 interviewees agree that they go out of their way to ride the streetcar to avoid the bus (unless that is the only option to get somewhere)</li>
                                <li>Since COVID, it has been several weeks since all participants last rode the TTC</li>
                                <li>Radius of travel has decreased to where they can walk by foot only</li>
                                <ul>
                                    <li>Exception for important appointments (i.e. Doctors/specialist appointment)</li>
                                </ul>
                                <li>P1 has decided to bike everywhere they would normally ride the TTC despite the weather</li>
                                <li>P2 & P3 has access to a car and has driven a lot more than normal</li>
                                <ul>
                                    <li>P2 & P3 say they typically used the car once every 2-3 weeks before pandemic, now at least once a week to run errands</li>
                                </ul>
                                <li>All participants agree that they have strategically planned their travels outside, whether to block time in their work calendar to walk to appointments, or drive, to avoid taking TTC</li>
                                <ul>
                                    <li>Waiting for at least most of the population to have vaccine</li>
                                </ul>
                            </ul>
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Literary Review 1'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column' } : {}}>
                            <div style={{ flex: 1, marginRight: 20 }}>
                                <Subtitle italic={true}>UX/UI Case Study: Redesigning a Public Transportation App for a Large Touristic City</Subtitle>
                                <Paragraph>
                                    This project is not only about redesigning an atypical type of public transportation app, but it also proposes an unconventional concept for a modern public transportation app that can be used in many other cities.
                                </Paragraph>
                                <Paragraph>
                                    Brave Geeks Team (2018). <a href={'https://uxplanet.org/ux-ui-case-study-redesigning-a-public-transportation-app-for-a-large-touristic-city-932a2157fa21?gi=c70838a140d9'} target={'_blank'}>UX/UI Case Study: Redesigning a Public Transportation App for a Large Touristic City | by BraveGeeks Team | UX Planet</a>
                                </Paragraph>
                                <StyledImg
                                    src={getImageUrl('toronto_tube_transportation_app_1.png')}
                                    alt={'Transportation App 1'}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        Topline Argument
                                    </Subtitle>
                                    <Paragraph>
                                        Main features should be found right on the home screen, based on main goals of the app
                                    </Paragraph>
                                </Paragraph>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        So What?
                                    </Subtitle>
                                    <Paragraph>
                                        When the app first starts up, the home screen provides proper information for the user (local or tourists) of how to purchase a Nol card, checking current balance, and storing cards to add balance when needed
                                    </Paragraph>
                                </Paragraph>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        Hypothesis
                                    </Subtitle>
                                    <Paragraph>
                                        Simplicity and ease of use while on the run is what makes a good app
                                    </Paragraph>
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'Literary Review 2'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column' } : {}}>
                            <div style={{ flex: 1, marginRight: 20 }}>
                                <Subtitle italic={true}> Best Mobile User Experience Design Practices for Public Transportation Apps</Subtitle>
                                <Paragraph>
                                    If it's a local app, created for a certain group in a certain region, it should consistently solve a particular problem. This is a solution provided by user-experience design experts
                                </Paragraph>
                                <Paragraph>
                                    Altexsoft (2019). <a href={'https://www.altexsoft.com/blog/mobile/best-mobile-user-experience-design-practices-for-public-transportation-apps/'} target={'_blank'}>Best Mobile User Experience Design Practices for Public Transportation Apps | AltexSoft</a>
                                </Paragraph>
                                <StyledImg
                                    style={{ maxWidth: 300 }}
                                    src={getImageUrl('toronto_tube_transportation_app_2.png')}
                                    alt={'Transportation App 2'}
                                />
                            </div>
                            <div style={{ flex: 1}}>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        Topline Argument
                                    </Subtitle>
                                    <Paragraph>
                                        Travel and local apps are the 4th most popular category in Google Play Store. If created for certain region, it should consistently solve a particular problem (constant updating).
                                    </Paragraph>
                                </Paragraph>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        So What?
                                    </Subtitle>
                                    <Paragraph>
                                        Based on user/citizen's needs, we can break down an app's functionality down to several categories, starting from user's first encounter with app
                                    </Paragraph>
                                </Paragraph>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        Hypothesis
                                    </Subtitle>
                                    <Paragraph>
                                        First impressions impact a user's opinion after using an app for the first
                                    </Paragraph>
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'Literary Review 3'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column' } : {}}>
                            <div style={{ flex: 1, marginRight: 20 }}>
                                <Subtitle italic={true}>UX/UI Case Study: RTC's App</Subtitle>
                                <Paragraph> 
                                    Design improvements for current RTC transportation app
                                </Paragraph>
                                <Paragraph>
                                    Jimenez, Yannick (2019). <a href={'https://medium.com/@yanick_jimenez/rtc-nomade-a-ux-case-study-f1070afb2db0'} target={'_blank'}>Redesigning Quebec’s public transit app-a UX case study | by Yanick Jimenez | Medium</a>
                                </Paragraph>
                                <StyledImg
                                    src={getImageUrl('toronto_tube_transportation_app_3.png')}
                                    alt={'Transportation App 3'}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        Topline Argument
                                    </Subtitle>
                                    <Paragraph>
                                        It is important to update your app consistently based on user needs and feedback
                                    </Paragraph>
                                </Paragraph>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        So What?
                                    </Subtitle>
                                    <Paragraph>
                                        Taking inspiration from the top app developers in the same category to optimise the current RTC transportation app
                                    </Paragraph>
                                </Paragraph>
                                <Paragraph>
                                    <Subtitle italic={true}>
                                        Hypothesis
                                    </Subtitle>
                                    <Paragraph>
                                        Competitor analysis is important to evaluate in order to retain customers and users
                                    </Paragraph>
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Experience Map'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column' } : {}}>
                            <div>
                                <Paragraph>
                                    With this streamlined payment process, the user is able to access all information related to the TTC in one location.
                                    When users first move to Toronto and want to use the TTC, it is not clear where riders can purchase a Presto Pass; not all Shoppers Drug Mart stores carry Presto Passes, and not all subway station entrances lead to a kiosk with a staff member to assist them.
                                </Paragraph>
                                <Paragraph>
                                    The Toronto Tube app can fill in the gap for riders who are new to the TTC or are only visiting for a short period of time. Rather than having kiosks at various stations, or finding a Shoppers Drug Mart, users can scan a QR Code at the entrance of subway stations or bus/streetcar shelters to pay their fare.
                                </Paragraph>
                            </div>
                            <StyledImg
                                style={{maxHeight: 300}}
                                src={getImageUrl('toronto_tube_experience_map.png')}
                                alt={'Toronto Tube User Experience Map'}
                            />
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Experience Mapping Process'}
                        color={color}
                    >
                        <div style={{textAlign: 'center'}}>
                            <StyledImg
                                style={{ maxWidth: 300 }}
                                src={getImageUrl('toronto_tube_experience_mapping_process.png')}
                                alt={'Toronto Tube User Experience Mapping Process'}
                            />
                        </div>
                    </Section>
                    <Section
                        title={'User Flow'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column' } : {}}>
                            <StyledImg
                                style={{ maxHeight: 200, marginRight: 20 }}
                                src={getImageUrl('toronto_tube_user_flow_1.png')}
                                alt={'Toronto Tube User Flow 1'}
                            />
                            <Paragraph>
                                When the user first enters the app, they have <strong>two options</strong> of how they want to register; the user can register for an account that they can set up automatic reloads, or a generic TTC pass.
                            </Paragraph>
                            <StyledImg
                                style={{ maxHeight: 200, marginLeft: 20 }}
                                src={getImageUrl('toronto_tube_user_flow_2.png')}
                                alt={'Toronto Tube User Flow 2'}
                            />
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Flow - Just Visiting'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column', alignItems: 'center' } : {alignItems: 'center'}}>
                            <StyledImg
                                style={{ maxHeight: 300, marginRight: 20 }}
                                src={getImageUrl('toronto_tube_user_flow_3.png')}
                                alt={'Toronto Tube User Flow 3'}
                            />
                            <div>
                                <Paragraph>
                                    Users who select <strong>Just Visiting</strong> are led to the payment page (right image) where they fill in the required information to purchase a pass.
                                </Paragraph>
                                <StyledRow style={{ alignItems:"center" }}>
                                    <div style={{ flex: 1 }}>
                                        <Paragraph>
                                            <strong>Type of Pass</strong>&nbsp;- drop down menu with options:
                                        </Paragraph>
                                        <ul>
                                            <li>Adult (18-64)</li>
                                            <li>Senior (65+)</li>
                                            <li>Child (12-17)</li>
                                            <li>Child (11 & under)</li>
                                        </ul>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Paragraph>
                                            <strong>Transit Pass</strong>&nbsp;- drop down menu with options:
                                        </Paragraph>
                                        <ul>
                                            <li>Single Trip</li>
                                            <li>Round Trip</li>
                                            <li>2-Day Pass</li>
                                            <li>Load Funds</li>
                                        </ul>
                                    </div>
                                </StyledRow>
                                <Paragraph>
                                    Users can select the amount of passes they wish to purchase (1-6). If the user selects more than 1, they must fill in the information above for each ticket they are purchasing.
                                    Once they submit their payment information, they are led to the card page (left image) where they can scan their phone to a TTC card reader, swipe per passenger if they have multiple cards, similar to a plane e-ticket on your mobile. The user is also able to see their remaining balance if they loaded an amount. The app is able to store their information if they download the card to their mobile wallet.
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'User Flow - Sign Up'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column', alignItems: 'center' } : {alignItems: 'center'}}>
                            <div>
                                <Paragraph>
                                    Users who select <strong>Sign Up</strong> are led to a page where they fill in their information to register (left image) for an account, load their card, and have the option on setting up Auto Reload. If the user selects Apple Pay or a saved payment method, the information on the second screen (right image) is automatically filled.
                                </Paragraph>
                                <Paragraph>
                                    Auto Reload allows their stored card information, on their device, to be charged automatically if the balance on the user’s card falls below a certaim amount, rather than loading it manually everytime. User is able to choose the amount the want to be automatically reloaded as well as the balance of when they want to trigger the automatic reload. The user will receive a notification on the app when their credit card has been charged, as well as an email, should they choose those in the notification settings.
                                </Paragraph>
                            </div>
                            <StyledImg
                                style={{ marginLeft: 20, maxHeight: 300 }}
                                src={getImageUrl('toronto_tube_user_flow_4.png')}
                                alt={'Toronto Tube User Flow 4'}
                            />
                        </StyledRow>
                        <StyledRow style={isMobile ? { flexDirection: 'column', alignItems: 'center' } : {alignItems: 'center'}}>
                            <StyledImg
                                style={{ marginRight: 20, maxHeight: 300 }}
                                src={getImageUrl('toronto_tube_user_flow_5.png')}
                                alt={'Toronto Tube User Flow 5'}
                            />
                            <div>
                                <Paragraph>
                                    Once the user registers and submits their payment information, they now have a new Home Screen (left image). On the new Home Screen, they are able to see their card balance, upload funds to top-up their amount, or register for a Transit Pass.
                                </Paragraph>
                                <Paragraph>
                                    The user's card button leads them to a screen where they can tap whenever they enter a subway station, or board a streetcar/bus (right image). On the Cards Page, the user has the option to add the card on their mobile wallet (similar to Apple Pay access) and view their 4 most recent rides, and scroll through their transit history.
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                    <Section
                        title={'Styling'}
                        color={color}
                    >
                        <StyledRow style={isMobile ? { flexDirection: 'column', alignItems: 'center' } : {alignItems: 'center'}}>
                            <div style={{ flex: 1, marginRight: 20, textAlign: 'center' }}>
                                <StyledImg
                                    src={getImageUrl('toronto_tube_styling_1.png')}
                                    alt={'Toronto Tube Styling 1'}
                                />
                                <Paragraph>
                                    The TTC is most recognisable from it’s red logo you can find on the streetcars, busses, subway carriages, and signs around the city. I wanted to create a logo that encompasses that. The red of the logo, is the only colour I use, other than black, white, and gray throughout the entire app.
                                </Paragraph>
                            </div>
                            <div style={{ flex: 1, textAlign: 'center' }}>
                                <StyledImg
                                    src={getImageUrl('toronto_tube_styling_2.png')}
                                    alt={'Toronto Tube Styling 2'}
                                />
                                <Paragraph>
                                    For the background of the app, I use a very light gray so that the white boxes where most of the main buttons are located is intuitive for the user (ex. menu bar and amount to load funds).
                                </Paragraph>
                            </div>
                        </StyledRow>
                    </Section>
                </StyledTorontoTube>
            </Content>
        </>
    )
}

export default TorontoTube