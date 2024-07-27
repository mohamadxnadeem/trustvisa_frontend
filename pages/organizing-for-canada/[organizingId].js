import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import DetailsOrganizing from '../../components/sections/DetailsOrganizing';
import FeatureTwo from '../../components/sections/FeatureTwo';
import { useRouter } from 'next/router';
import { useOrganizingForCanadaData, renderOrganizingForCanadaLinks } from '../../components/layout/Fetched_Data/Organzing_for_canadaData';
import ContactInner from "../../components/sections/ContactInner";
import FaqOne from "../../components/sections/FaqOne";
import Head from 'next/head';



// Define a function to fetch Organizing for Canada details by ID
async function fetchOrganizingForCanadaDetail(organizingId) {
  const apiUrl = `https://trustvisaapi-production.up.railway.app/api/organizing_for_canada/${organizingId}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

// ================================================================================================


// Fetch FAQ ]

async function fetchOrganizingFaqs() {
  const FaqapiUrl = `https://trustvisaapi-production.up.railway.app/api/faqs/organizing`;
  const response = await fetch(FaqapiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
  
}

// ================================================================================================


export default function OrganizingForCanadaPage() {

  

  const organizingForCanadaData = useOrganizingForCanadaData();
  const organizingForCanadaLinks = renderOrganizingForCanadaLinks(organizingForCanadaData);
  const [organizingForCanada, setOrganizingForCanada] = useState(null);
  const [OrganizingFaqs, setOrganizingFaqs] = useState(null);


  const router = useRouter();

  useEffect(() => {
    // Clear the organizingForCanada state when navigating to a different page
    setOrganizingForCanada(null);

    // Fetch Organizing for Canada details when the route changes
    const organizingId = router.query.organizingId;
    if (organizingId) {
      fetchOrganizingForCanadaDetail(organizingId)
        .then((data) => {
          setOrganizingForCanada(data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });

        fetchOrganizingFaqs()
        .then((faqsData) => {
          setOrganizingFaqs(faqsData);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [router.query.organizingId]);

  if (!organizingForCanada) {
    return <div class="preloader"></div> // You can display a loading indicator
  }

  return (
    <>
      <Head>
        <title>{organizingForCanada.meta_title_seo || 'Trust Visa, a visa partner you can trust'}</title>
        <meta name="description" content={organizingForCanada.meta_description_seo || 'Your Trusted Visa Partner Immigrating to Canada on your own can be a daunting process due to its complex and ever-changing laws. At Trust Visa, we take pride in protecting your Canadian future with our Regulated Canadian Immigration Consultants (RCICs). licensed Canadian immigration.'} />
        <meta name="keywords" content={organizingForCanada.meta_keywords_seo || 'Trusted Visa, Immigrating to Canada, Canadian Immigration Consultants, Canadian immigration.'} />
      </Head>
      <Layout HeaderStyle="one">
        <FeatureTwo />
        <DetailsOrganizing data={organizingForCanada} links={organizingForCanadaLinks}/>
        <FaqOne data={organizingForCanada.faqs}/>
        <ContactInner />
      </Layout>
    </>
  );
}