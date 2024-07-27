import React from "react";
import Image from "next/image";
import AboutUS from "./../../public/images/aboutUS.svg";
import FunFactOne from "./FunFactOne";




const AboutTwo = () => {
  return (
    <>
      <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-12 col-md-12 wow fadeInRight" data-wow-delay="200ms">
              <div className="inner-column">

                <div className="sec-title">
                  <h2>Your Trusted Visa Partner</h2>
                  <div className="text">Immigrating to Canada on your own can be a daunting process due to its complex and ever-changing laws.</div>
                  <div className="text">
                    At Trust Visa, we take pride in protecting your Canadian future with our RegulatedCanadian Immigration Consultants (RCICs). Our licensed Canadian immigration consultants are authorized members in good standing with years of experience inimmigration, citizenship, and refugee matters.
                  </div>
                </div>
            
               
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <figure className="image overlay-anim wow fadeInUp">
                    <Image src={AboutUS} />
                  </figure>
                  <span className="float-text">Trusted by Clients</span>
                </div>
              </div>
            </div>

          </div>

         

         
        </div>
      </section>

      <FunFactOne/>

      <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
            
          <div className="content-column col-xl-12 col-lg-12 col-md-12 wow fadeInRight" data-wow-delay="200ms">
              

              <div className="sec-title">
                  <h2>We achieve</h2>
                  <div className="text">your Canadian immigration goals by delivering exceptional services such as expert guidance, application support, documents administration , eligibility assessment ,effective communication with immigration authorities ,adherence to regulations .</div>
                
                </div>

                <div className="sec-title">
                  <h2>Our objective</h2>
                  <div className="text">is to guarantee a smooth and stress-free start to your Canadian journey with a cost-effective.</div>
                  
                </div>
            </div>
          </div>

          



          <div className="inner-column">
                
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle" /> Expertise: RCICs are trained and knowledgeable about Canadian immigration
laws, policies, and procedures. They stay updated with the latest changes, ensuring
you receive accurate advice.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Personalized Guidance: RCICs provide tailored guidance based on your unique
circumstances, helping you choose the most suitable immigration pathway.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Application Assistance: They assist in preparing and submitting your
immigration application, minimizing errors and increasing your chances of approval.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Documentation Support: RCICs help gather and organize required documents,
ensuring they meet Canadian standards.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Language Proficiency: They offer guidance on language tests and improve your
chances of meeting language proficiency requirements.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Reduced Delays: RCICs can expedite the application process, reducing the risk
of delays and requests for additional information.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />Cost-Efficiency: While there are fees for RCIC services, their expertise can
prevent costly application mistakes or rejections.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Compliance: RCICs ensure your application complies with Canadian laws and
regulations, minimizing legal risks.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Appeals: In case of rejection, they can help you navigate the appeals process
effectively.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />Peace of Mind: Using an RCIC reduces stress and uncertainty during the
immigration process, increasing your chances of success.
                  </li>
                 
                </ul>
              </div>

              <br></br>
              
              <center>
              <div className="sec-title">
                  <div className="text">Turn your immigration aspirations into achievements</div>
                  <h2>Let's begin!</h2>

                  
                </div>

              </center>
           

          

          </div>

         

         
      </section>
    </>
  );
};

export default AboutTwo;
