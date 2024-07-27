import React, { useEffect, useState } from 'react';
import Layout from "../components/layout/Layout";
import CtaOne from "../components/sections/CtaOne";
import FaqOne from "../components/sections/FaqOne";
import FeatureTwo from "../components/sections/FeatureTwo";
import FunFactOne from "../components/sections/FunFactOne";
import AnimatedSlider from "../components/slider/AnimatedSlider";
import ContactInner from "../components/sections/ContactInner";
import AboutCanada from '../components/sections/HomeSliders/AboutCanada'
import OrganizingForCanada from '../components/sections/HomeSliders/OrganizingForCanada'
import Programs from '../components/sections/HomeSliders/Programs'
import Blogs from '../components/sections/HomeSliders/Blogs'




// Fetch FAQ ]

async function fetchRCICCFaqs() {
  const FaqapiUrl = `https://trustvisaapi-production.up.railway.app/api/rcic/`;
  const response = await fetch(FaqapiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
  
}


export default function Home() {

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
        <AnimatedSlider />
        <FeatureTwo />

       

        {/* <AboutTwo/> */}
        
        <Programs />







        <ContactInner />
        <FunFactOne />
        <AboutCanada />

        <FaqOne data={RcicFaqs} />
        <OrganizingForCanada />
        <CtaOne />
        <Blogs />
      </Layout>
    </>
  );
}
