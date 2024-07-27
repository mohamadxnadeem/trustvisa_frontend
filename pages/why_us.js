import React, { useEffect, useState } from 'react';
import Layout from "../components/layout/Layout";
import FeatureTwo from "../components/sections/FeatureTwo";
import FunFactOne from "../components/sections/FunFactOne";
import ContactInner from "../components/sections/ContactInner";
import AboutTwo from '../components/sections/AboutTwo'
import Image from "next/image";
import Agent from "./../public/images/agent.jpg";


import FeatureOne from '../components/sections/FeatureOne';








async function fetchRCICCFaqs() {
  const FaqapiUrl = `https://trustvisaapi-production.up.railway.app/api/faqs/get_rcic_faqs`;
  const response = await fetch(FaqapiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
  
}



function whyUs() {
  const [RcicFaqs, setRcicFaqs] = useState(null);

  useEffect(() => {
    fetchRCICCFaqs()
      .then((faqsData) => {
        setRcicFaqs(faqsData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);


  
  return (
    <>
      <Layout HeaderStyle="one">
        
          <FeatureTwo />

          <AboutTwo/>

          
        
          <ContactInner />
          <center>
            <div className="rcic-container">
              <div className="auto-container">
                <div className="row">
                  <figure className="image overlay-anim wow fadeInUp">
                    <h2>Meet our Expert RCIC </h2>
                    <Image src={Agent} />
                    <p>Jodi McDonald, RCIC, BA, CAPIC</p>
                    <p>College of Immigration and Citizenship</p>
                    <p>Consultants (CICC) R517401</p>

                  </figure>
                </div>
              </div>
            </div>
          </center>

          

          <div style={{ display: 'flex', justifyContent: 'center' }}> 
          <h2>You can find us at: </h2>

          </div>


          <div style={{ display: 'flex', justifyContent: 'center' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.2388216738796!2d-75.92708232455459!3d45.343991141452435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1ff8fad8678e7%3A0xd15a98b4af6262ba!2s1000%20Innovation%20Dr%2C%20Ottawa%2C%20ON%20K2K%203E7%2C%20Canada!5e0!3m2!1sen!2sza!4v1719310534290!5m2!1sen!2sza"
    width="800"
    height="450"
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>



</div>
 <br></br>




        </Layout>

      </>
      
    )
  }


export default whyUs