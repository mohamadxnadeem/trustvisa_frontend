import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Accordion from "../elements/Accordion";
import ContactInner from "../sections/ContactInner";
import SideMenuContact from "./SideMenuContact";




 
const Serviceone = ({ data, links  }) => {

  console.log('this is the data from details screen:', data)

  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">

         

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">


              <div>
                          
                <ul>
                  <li>
                    <h2>{data.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.body }} />
                  </li>
                
                </ul>
                
              </div>




                

                
                <div className=" mt-25">





                  {/*  
                  <h3>Frequently Asked Question</h3>
                  <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <Accordion />
                  */}
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                    <div className="service-list">

                    <SideMenuContact />
                      
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Serviceone;
