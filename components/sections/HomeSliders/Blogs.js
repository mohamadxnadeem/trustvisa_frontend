import React from 'react';
import TrainingSliderTwo from '../../slider/TrainingSliderTwo';
import { useBlogData } from '../../layout/Fetched_Data/BlogData'


function Blogs() {

    const data = useBlogData();

    return (
        <>
            <section className="training-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Checkout some of our blogs <br />about fun things in Canada</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="training-carousel">
                            <TrainingSliderTwo data={data} linkPrefix="blogs"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs