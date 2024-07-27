import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Accordion from "../elements/Accordion";




// Define a function to fetch all programs
async function fetchAllPrograms() {
  const apiUrl = 'http://127.0.0.1:8000/api/programs/';
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}

 
const OrganizingDetails = ({ program  }) => {

  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    // Fetch all programs when the component mounts
    fetchAllPrograms()
      .then((data) => {
        // Create a custom link for each program
        const customLinks = data.map((program) => ({
          title: program.title,
          linkurl: `/program/${program.id}`, // Assuming you have a program detail page
        }));
        setProgramList(customLinks);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);



  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                    <div className="service-list">

                    <ul>
                        {programList.map((eachitem, index) => (
                          <li key={index}>
                            <Link href={`/page-visa-details/${programList.id}`}>
                              <i className="fas fa-angle-right"></i>
                              <span>{eachitem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget banner-widget">
                  <div className="widget-content" style={{ backgroundImage: "url(images/resource/contact.jpg)" }}>
                    <div className="shape" style={{ backgroundImage: "url(/images/resource/overlay-shape.png)" }}></div>
                    <div className="content-box">
                      <div className="icon-box">
                        <i className="lnr lnr-icon-pie-chart"></i>
                      </div>
                      <h3>Be healthy & eat only fresh</h3>
                      <Link href="page-contact" className="theme-btn btn-style-two bg-light">
                        <span className="btn-title text-black"> Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget service-sidebar-single mt-5">
                  <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                    <Link href="#" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">


              <div>
                          
                <ul>
                  <li>
                    <h2>{program.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: program.body }} />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganizingDetails;
