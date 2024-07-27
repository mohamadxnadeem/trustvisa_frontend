import React from 'react';
import AboutSlider from '../../slider/AboutSlider';
import { useAboutCanadaData } from '../../layout/Fetched_Data/About_CanadaData'


function AboutCanada() {

    const data = useAboutCanadaData();

    return (
        <>
            <section className="training-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Learn more about <br />all the opportunites in Canada</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="training-carousel">
                            <AboutSlider data={data} linkPrefix="about-canada"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutCanada