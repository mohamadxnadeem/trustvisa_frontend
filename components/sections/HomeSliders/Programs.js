import React from 'react';
import ProgramSlider from '../../slider/ProgramSlider';
import { useProgramData  } from '../../layout/Fetched_Data/ProgramData';

function Programs() {
    const data = useProgramData();


    
    return (
        <>
            <section className="training-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>How we can help you  <br />Speed up your process to live your dream life in Canada</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="training-carousel">
                            <ProgramSlider data={data} linkPrefix="page-visa-details" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Programs