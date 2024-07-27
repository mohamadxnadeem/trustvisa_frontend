import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import DetailsAbout from '../../components/sections/DetailsAbout';
import FeatureTwo from '../../components/sections/FeatureTwo';
import { useRouter } from 'next/router';
import { useAboutCanadaData, renderAboutCanadaLinks } from '../../components/layout/Fetched_Data/About_CanadaData';
import ContactInner from "../../components/sections/ContactInner";
import FaqOne from "../../components/sections/FaqOne";
import Head from 'next/head';


// Define a function to fetch About Canada details by ID
async function fetchAboutCanadaDetail(aboutCanadaId) {
  const apiUrl = `https://trustvisaapi-production.up.railway.app/api/about_canada/${aboutCanadaId}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;


}

// ================================================================================================


// Fetch FAQ ]

async function fetchAboutCanadaFaqs() {
  const FaqapiUrl = `https://trustvisaapi-production.up.railway.app/api/faqs/get_about_canada_faqs`;
  const response = await fetch(FaqapiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
  
}

// ================================================================================================




export default function AboutCanadaPage() {

  const aboutCanadaData = useAboutCanadaData();
  const aboutCanadaLinks = renderAboutCanadaLinks(aboutCanadaData);
  const [aboutCanada, setAboutCanada] = useState(null);
  const [AboutCanadaFaqs, setAboutCanadaFaqs] = useState(null);
  const router = useRouter();

  console.log('about canada with faqs:', aboutCanada)


  useEffect(() => {
    // Clear the aboutCanada state when navigating to a different page
    setAboutCanada(null);

    // Fetch About Canada details when the route changes
    const aboutCanadaId = router.query.about_canadaId;
    if (aboutCanadaId) {
      fetchAboutCanadaDetail(aboutCanadaId)
        .then((data) => {
          setAboutCanada(data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });

        fetchAboutCanadaFaqs()
        .then((faqsData) => {
          setAboutCanadaFaqs(faqsData);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [router.query.about_canadaId]);

  if (!aboutCanada) {
    return <div class="preloader"></div> // You can display a loading indicator
  }

  return (
    <>
      <Head>
        <title>{aboutCanada.meta_title_seo || 'Trust Visa, a visa partner you can trust'}</title>
        <meta name="description" content={aboutCanada.meta_description_seo || 'Your Trusted Visa Partner Immigrating to Canada on your own can be a daunting process due to its complex and ever-changing laws. At Trust Visa, we take pride in protecting your Canadian future with our Regulated Canadian Immigration Consultants (RCICs). licensed Canadian immigration.'} />
        <meta name="keywords" content={aboutCanada.meta_keywords_seo || 'Trusted Visa, Immigrating to Canada, Canadian Immigration Consultants, Canadian immigration.'} />
      </Head>
      <Layout HeaderStyle="one">
        <FeatureTwo />
        <DetailsAbout data={aboutCanada} links={aboutCanadaLinks} />
        <FaqOne data={aboutCanada.faqs}/>
        <ContactInner />
      </Layout>
    </>
  );
}