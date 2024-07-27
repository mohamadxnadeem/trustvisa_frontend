import React, { useEffect, useState } from 'react';
import Layout from "../components/layout/Layout";
import FeatureTwo from "../components/sections/FeatureTwo";
import FunFactOne from "../components/sections/FunFactOne";
import ContactInner from "../components/sections/ContactInner";
import AboutTwo from '../components/sections/AboutTwo'

import FeatureOne from '../components/sections/FeatureOne'






async function faqs() {
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
    faqs()
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
        
      
          
        
          <ContactInner />



        </Layout>

      </>
      
    )
  }


export default whyUs