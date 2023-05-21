import React, { Component } from 'react';

import Jumbotron from "./page_components/home_slide";
// import processDeliver from "./page_components/processDeliver";

export default class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='landingPage_wrapper'>
                    <Jumbotron 
                        greeting={"Christ+craft+community."} 
                    />

                    <div>
                        <p>The rest</p>
                    </div>

                {/* <div className='about'>

                
                    
                <h3>About</h3>

                    <p>Crusader Creative is a partnership built on shared faith, and a value for craft.</p>

                    <p>With over 12 years of combined experience in branding, web development and digital communications, we are the right choice for independent, ethical brands.</p>
                    
                    <ul>
                        <li>Logos + identities</li>
                        <li>Packaging + branding</li>
                        <li>Publication + print</li>
                        <li>Web design + development</li>
                        <li>Digital concierge services (chat automation ~ SEO, analytics + audit ~ funnels)</li>
                    </ul>

                    <div className='founders'>
                        <div className='Ebenezer'>
                            <p>EBENEZER brands</p>
                            <p><em>short story:</em> Compulsive reader and artist applies himself to make great ideas look right.</p>
                            <p><em>Learning paths:</em>  Psychology + social science ~ marketing + creative advertising ~ visual art + design. </p>
                            <p><em>Toolset:</em>  desktop publishing ~ word processing + presentation ~ web design ~ audio/video production ~ content management ~ social media management. </p>
                            <p><em>Strengths:</em>  writing ~ research + summary ~ typography ~ vector graphics ~ content presentation ~ music composition ~ storyboarding + art direction. </p>
                        </div>

                        <div className='Joseph'>
                            <p>JOSEPH builds</p>
                            <p><em>short story:</em> Artist-mathematician hybrid blends analysis and creativity to solve problems at any scale.</p>
                            <p><em>Learning paths:</em>  Computer science ~ mathematics ~ web development ~ data structures + algorithms ~ machine learning</p>
                            <p><em>Toolset:</em>  desktop publishing ~ UX/UI design ~ data mining + analysis ~ web design + development ~ e-commerce, funnels + search optimization ~ service automation ~ data management </p>
                            <p><em>Strengths:</em> client support ~ data analysis ~ user conversion ~ systems support + maintenance ~ photo art </p>
                        </div>
                    </div>
                </div>

                <div className='logo'>
                    <h3>Logos</h3>

                    <div className='text'>
                        <p>With over a decade’s worth of combined experience in brand design, we have a track record of robust and efficient visual identities anchored by world-class symbols. Trust us to bring your vision to life.</p>
                    </div>

                    <div className='images'></div>
                </div>

                <div className='logo'>
                    <h3>Print</h3>

                    <div className='text'>
                        <p>Let us help you to put your message on pages, on walls, and in spaces. The medium always informs our approach, so our results always cut through cluttered environments. And with our network of print partners, we are assured of quality prints at every production scale and price point.</p>
                    </div>

                    <div className='images'></div>
                </div>

                <div className='logo'>
                    <h3>Product</h3>

                    <div className='text'>
                        <p>Packaging matters. A unique form factor can silence competition; a simple sticker can give the shopper a definite promise of quality and delight. We always aim for strong product branding –  easy to apply, even easier to love.</p>
                    </div>

                    <div className='images'></div>
                </div>


                <div className='logo'>
                    <h3>Web</h3>

                    <div className='text'>
                        <p>As the world moves into cyberspace, you need a digital platform for your message. We build fast, accessible websites that you can manage independently – for ecommerce, publishing, digital marketing, or simply as a calling card.</p>
                    </div>

                    <div className='images'></div>
                </div>

                <div className='logo'>
                    <h3>Digital Concierge</h3>

                    <div className='text'>
                        <p>“Why do I need a Digital Concierge?”</p>
                        <p>Well, you tell us: how could technology boost  your growth, if you didn’t have to stress about managing it? For many of our clients, the answer is simple: 24-hour support for their customers, in the palm of their hand. We created this service to cover the range of all past requests; the list can always expand to embrace your unique need. Just reach out, and we’ll discuss it. </p>
                    </div>

                    <ul>
                        <li>Chat automation (Whatsapp + Facebook + - Instagram + website chat)</li>
                        <li>Ecommerce integration + onboarding</li>
                        <li>Service activation + troubleshooting</li>
                        <li>Cloud storage + services</li>
                    </ul>

                    <div className='images'></div>

                    </div> */}
                </div>
            </React.Fragment>          
        );
    }
}