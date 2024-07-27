import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import DetailsPrograms from '../../components/sections/DetailsPrograms';
import FeatureTwo from '../../components/sections/FeatureTwo';
import { useRouter } from 'next/router';
import ContactInner from "../../components/sections/ContactInner";
import FaqOne from "../../components/sections/FaqOne";
import { useProgramData, renderProgramLinks } from '../../components/layout/Fetched_Data/ProgramData';
import Head from 'next/head';



// Define a function to fetch program details by ID
async function fetchProgramDetail(programId) {
  const apiUrl = `https://trustvisaapi-production.up.railway.app/api/programs/${programId}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

// ================================================================================================

// Fetch FAQ ]

async function fetchProgramFaqs() {
  const FaqapiUrl = `https://trustvisaapi-production.up.railway.app/api/faqs/program`;
  const response = await fetch(FaqapiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
  
}

// ================================================================================================


export default function ProgramDetailsPage() {

  const programData = useProgramData(); // Assuming this function returns your program data
  const links = renderProgramLinks(programData); // Assuming this function renders your program links
  const [program, setProgram] = useState(null);
  const [programFaqs, setProgramFaqs] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Clear the program state when navigating to a different page
    setProgram(null);
    const programId = router.query.programId;
    if (programId) {
      fetchProgramDetail(programId)
        .then((data) => {
          setProgram(data);
          console.log('this is the data',data)

        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });

        // Fetch program-specific FAQs
      fetchProgramFaqs()
      .then((faqsData) => {
        setProgramFaqs(faqsData);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }

    

  }, [router.query.programId]);




  if (!program) {
    return <div className="preloader"></div>; // You can display a loading indicator
  }

  

  return (
    <>
      <Head>
        <title>{program.meta_title_seo || 'Trust Visa, a visa partner you can trust'}</title>
        <meta name="description" content={program.meta_description_seo || 'Your Trusted Visa Partner Immigrating to Canada on your own can be a daunting process due to its complex and ever-changing laws. At Trust Visa, we take pride in protecting your Canadian future with our Regulated Canadian Immigration Consultants (RCICs). licensed Canadian immigration.'} />
        <meta name="keywords" content={program.meta_keywords_seo || 'Trusted Visa, Immigrating to Canada, Canadian Immigration Consultants, Canadian immigration.'} />
      </Head>
      <Layout HeaderStyle="one">
        <FeatureTwo />
        <DetailsPrograms data={program} links={links} />
        <FaqOne data={program.faqs}/>
        <ContactInner />
      </Layout>
    </>
  );
}
