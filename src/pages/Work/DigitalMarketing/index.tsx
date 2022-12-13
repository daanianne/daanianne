import * as React from 'react'
import { Link } from 'react-router-dom';
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
    StyledDigitalMarketing,
    StyledRow,
    StyledImg,
} from './index.style';
export interface IProps {
    
}

const color = '#CADFF2';

const DigitalMarketing: React.FC<IProps> = (props: IProps) => {
    const {} = props;

    const isMobile = useIsMobile();
    
    const mobileParagraphBoxStyle = {
        backgroundColor: '#f4f4f4',
        paddingLeft: 5,
        paddingRight: 5,
        border: 'solid #000 1px',
    }

    const marketGrowthIntro = (
        <Paragraph style={isMobile ? {fontSize: 8} : {}}>
            The two weeks leading up to Black Friday are some of the most competitive times in marketing to get the best paid ad slots online.
        </Paragraph>
    );

    return (
        <>
            <Banner
                color={color}
                title={'Digital Marketing'}
                content={'Freelance and Contract work case studies'}
            />
            <Content>
                <StyledDigitalMarketing>
                    <Section
                        title={'Brand Refreshment'}
                        color={color}
                        defaultOpen={true}
                    >
                        <Paragraph>
                            <strong style={{ fontStyle: 'italic' }}>Business Issue:</strong>&nbsp;
                            Business owner did not have a clear idea of who their target audience was for the company; therefore did not have a clear objective to their marketing strategies
                        </Paragraph>
                        <Paragraph>
                            <strong style={{ fontStyle: 'italic' }}>Overall Goal:</strong>&nbsp;
                            Create new marketing strategies that reflect new brand identity and tone
                        </Paragraph>
                        <StyledRow style={{ alignItems: 'stretch' }}>
                            <Paragraph
                                style={isMobile ? mobileParagraphBoxStyle : {}}
                            >
                                <Subtitle italic={true}>Research</Subtitle>
                                <ul>
                                    <li>Identify who is the target audience/client for the business</li>
                                    <li>Design and test different platforms for marketing campaigns to evaluate ROI Optimisation to work within strict budgets</li>
                                    <li>Conduct market analysis to find growth opportunities and expand market reach</li>
                                </ul>
                            </Paragraph>
                            <Paragraph
                                style={isMobile ? mobileParagraphBoxStyle : {}}
                            >
                                <Subtitle italic={true}>Strategy</Subtitle>
                                <ul>
                                    <li>Conduct analysis of who the target native audience/client is and test various digital media platforms </li>
                                    <li>Ran a 6 week campaign testing various brand tones</li>
                                    <li>Create proper marketing strategies that will optimise their budget that the business can follow and update seasonally</li>
                                </ul>
                            </Paragraph>
                        </StyledRow>
                        <Paragraph>
                            <Subtitle italic={true}>Results</Subtitle>
                            <ul>
                                <li>Updated to create an OMNI-channel user experience across all owned digital platforms with new brand tone which appeared more natural and inviting to their native target audience</li>
                                <li>Identified key priorities to maximise ROI for their marketing strategy that accurately represents their business goals and identity</li>
                            </ul>
                        </Paragraph>
                    </Section>
                    <Section
                        title={'Organic SEO Strategy'}
                        color={color}
                        
                    >
                        <Paragraph>
                            <strong style={{ fontStyle: 'italic' }}>Overall Goal:</strong>&nbsp;
                            Update and develop company website to optimise SEO organically
                        </Paragraph>
                        <StyledRow style={{alignItems: 'stretch'}}>
                            <Paragraph
                                style={isMobile ? mobileParagraphBoxStyle : {}}
                            >
                                <Subtitle italic={true}>Research</Subtitle>
                                <ul>
                                    <li>Content analysis on website to see how to improve their searchability on Google and increase their ranking organically</li>
                                    <li>Conducted keyword search analysis related to the industry and regional analysis of other business competitors and their organic ranking on Google</li>
                                    <li>SWOT analysis of local competitors and find quick opportunities for business to increase their SEO ranking</li>
                                </ul>
                            </Paragraph>
                            <Paragraph
                                style={isMobile ? mobileParagraphBoxStyle : {}}
                            >
                                <Subtitle italic={true}>Strategy</Subtitle>
                                <ul>
                                    <li>Updated their URL structure and metadata descriptions of their pages, specifically targeting the pages with local information of where their business operates</li>
                                    <li>Optimised searchability of keywords in H1, H2, and descriptions fields of webpages, where business was almost on first page of Google, to improve ranking results quickly</li>
                                </ul>
                            </Paragraph>
                        </StyledRow>
                        <Paragraph>
                            <Subtitle italic={true}>Results</Subtitle>
                            <ul>
                                <li>Went from appearing on the third Google page, to appearing on the bottom of the first page, all with no SEO campaign budget</li>
                            </ul>
                        </Paragraph>
                        <div style={{ textAlign: 'center' }}>
                            <StyledImg
                                style={isMobile ? {maxWidth: 300} : {}}
                                src={getImageUrl('digital_marketing_seo.png')}
                                alt={'Digital Marketing SEO Result'}
                            />
                        </div>
                    </Section>
                    <Section
                        title={'Market Growth Opportunities'}
                        color={color}
                        
                    >
                        <Paragraph>
                            <strong style={{ fontStyle: 'italic' }}>Campaign Objective:</strong>&nbsp;
                            Create marketing strategy for Black Friday to Boxing Day sale
                        </Paragraph>
                        { isMobile ? marketGrowthIntro : <></> }
                        <StyledRow>
                            <StyledImg
                                src={getImageUrl('digital_marketing_market_growth.png')}
                                alt={'Market Growth Opportunities'}
                                style={isMobile ? {maxHeight: 255} : {}}
                            />
                            <Paragraph
                                style={{ marginLeft: isMobile ? 10 : 40, marginTop: 0 }}
                            >
                                {isMobile ? <></> : marketGrowthIntro}
                                <Paragraph
                                    style={isMobile ? {fontSize: 10, margin: 0} : {}}
                                >
                                    <Subtitle
                                        italic={true}
                                        style={isMobile ? {margin: 0} : {}}
                                    >
                                        Strategy
                                    </Subtitle>
                                    <ul style={isMobile ? {paddingInlineStart: 10} : {}}>
                                        <li>Start nurturing the target audience almost a month in advance so they will recognise the brand logo and name at the launch of Black Friday sales</li>
                                        <li>Experiment with the brand tone to see if we could expand their reach before Black Friday sale</li>
                                        <li>Create new social media and email templates to update their online presence</li>
                                        <li>Feature different types of ways for target market to absorb brand media</li>
                                        <li>Videos, photos, testimonials, Instagram Lives, Q&As, etc.</li>
                                    </ul>
                                </Paragraph>
                                <Paragraph
                                    style={isMobile ? {fontSize: 6} : {}}
                                >
                                    *This business carries more speciality type products so I created short videos showing how to use various products in everyday settings to make it more relatable to the consumer*
                                </Paragraph>
                            </Paragraph>
                        </StyledRow>
                        <StyledRow
                            style={isMobile ? {flexDirection: 'column', alignItems: 'center'} : {}}
                        >
                            <Paragraph>
                                <Subtitle italic={true}>Results</Subtitle>
                                <ul>
                                    <li>One of the videos created was shared, and tagged, by a well-known brand, with over 250,000 followers (at the time)</li>
                                    <li>Increased social media's followers and market reach by 300% days before the launch of the Black Friday sale</li>
                                    <li>Surpassed campaign and sale prediction by 150% with about 75% retention of those new followers after the sale ended</li>
                                </ul>
                                <Paragraph>
                                    Found market growth opportunities to expand reach by using numerous methods of producing content to increase visibility and sharability on social media
                                </Paragraph>
                            </Paragraph>

                            {
                                isMobile ?
                                (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                        <StyledImg
                                            src={getImageUrl('digital_marketing_example_1.png')}
                                            alt={'Digital Marketing Example 1'}
                                            style={isMobile ? {maxHeight: 255} : {}}
                                        />
                                        <StyledImg
                                            src={getImageUrl('digital_marketing_example_2.png')}
                                            alt={'Ditigal Marketing Example 2'}
                                            style={isMobile ? {maxHeight: 255} : {}}
                                        />
                                    </div>
                                )
                                :
                                (
                                    <>
                                        <StyledImg
                                            src={getImageUrl('digital_marketing_example_1.png')}
                                            alt={'Digital Marketing Example 1'}
                                            style={{ marginRight: 12 }}
                                        />
                                        <StyledImg
                                            src={getImageUrl('digital_marketing_example_2.png')}
                                            alt={'Ditigal Marketing Example 2'}
                                        />
                                    </>
                                )
                            }
                        </StyledRow>
                        <hr
                            style={{ marginTop: isMobile ? 60 : 100, marginBottom: isMobile ? 60 : 100 }}
                        />

                    </Section>
                    <Section
                        title={'Work With Me'}
                        color={color}
                        
                    >
                        <Paragraph style={{ textAlign: 'center' }}>
                            Interested in learning more about my design methods or have a project you would like to work with me on?
                            <br />
                            <br />
                            <Link to={'/contact'}>Send me a message here :)</Link>
                        </Paragraph>
                    </Section>
                </StyledDigitalMarketing>
            </Content>
        </>
    )
}

export default DigitalMarketing