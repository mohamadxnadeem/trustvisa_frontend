import React from 'react';

import WorkIcon from '@mui/icons-material/Work';
import TaskIcon from '@mui/icons-material/Task';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const FeatureTwo = () => {
    return (
        <>
            <section className="features-section-two">
             
                    <div className="outer-box">
                        <div className="row">
                            <div className="features-column col-lg-6">
                                    <div className="inner-column">
                                
                                        <ul className="features-list">
                                            <li><WorkIcon/> 15+ Years experience Immigration, citizenship and refugee</li>
                                        </ul>
                                        <ul className="features-list">
                                            <li><TaskIcon/> High qualified team members, 6999+ files completed</li>
                                        </ul>
                                        <ul className="features-list">
                                            <li><SupportAgentIcon/> 24/7 multilingual support</li>
                                        </ul>
                                    </div>
                            </div> 

                            <div className="features-column col-lg-6">
                                    <div className="inner-column">
                                        <ul className="features-list">
                                            <li> Effective, Premium Immigration services <HandshakeIcon/></li>
                                        </ul>
                                        <ul className="features-list">
                                            <li>Trusted by thousands of Applicants <ThumbUpIcon/></li>
                                        </ul>
                                        <ul className="features-list">
                                            <li>Stress- Free and Economical <PriceCheckIcon/></li>
                                        </ul>
                                    </div>
                            </div> 

                            
                        </div>
                        
                    </div>
            </section>


        </>
    );
};

export default FeatureTwo;