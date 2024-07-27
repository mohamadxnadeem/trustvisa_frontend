import React from 'react';
import OrganizingSlider from '../../slider/OrganizingSlider';
import { useOrganizingForCanadaData } from '../../layout/Fetched_Data/Organzing_for_canadaData'


function OrganizingForCanada() {
    const data = useOrganizingForCanadaData();


    return (
        <>
          <section className="training-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Everything you need to know  <br />to organize your new life in Canada</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="training-carousel">
                            <OrganizingSlider data={data} linkPrefix="organizing-for-canada"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default OrganizingForCanada