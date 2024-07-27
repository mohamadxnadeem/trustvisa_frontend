import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Serviceone from '../../components/sections/VisaDetails';
import FeatureTwo from '../../components/sections/FeatureTwo';
import { useRouter } from 'next/router';
import { useBlogData, renderBlogLinks } from '../../components/layout/Fetched_Data//BlogData';
import ContactInner from "../../components/sections/ContactInner";
import Head from 'next/head';



// Define a function to fetch Organizing for Canada details by ID
async function fetchBlogDetail(blogId) {
  const apiUrl = `https://trustvisaapi-production.up.railway.app/api/blog/${blogId}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}



// ================================================================================================


export default function BlogPage() {

  

  const BlogData = useBlogData();
  const BlogLinks = renderBlogLinks(BlogData);
  const [Blog, setBlog] = useState(null);


  const router = useRouter();

  useEffect(() => {
    // Clear the Blog state when navigating to a different page
    setBlog(null);

    // Fetch Organizing for Canada details when the route changes
    const blogId = router.query.blogId;
    
    if (blogId) {
      fetchBlogDetail(blogId)
        .then((data) => {
          setBlog(data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });

       
    }
  }, [router.query.blogId]);

  if (!Blog) {
    return <div class="preloader"></div> // You can display a loading indicator
  }

  return (
    <>
      <Head>
        <title>{Blog.meta_title_seo || 'Trust Visa, a visa partner you can trust'}</title>
        <meta name="description" content={Blog.meta_description_seo || 'Your Trusted Visa Partner Immigrating to Canada on your own can be a daunting process due to its complex and ever-changing laws. At Trust Visa, we take pride in protecting your Canadian future with our Regulated Canadian Immigration Consultants (RCICs). licensed Canadian immigration.'} />
        <meta name="keywords" content={Blog.meta_keywords_seo || 'Trusted Visa, Immigrating to Canada, Canadian Immigration Consultants, Canadian immigration.'} />
      </Head>
      <Layout HeaderStyle="one">
        <FeatureTwo />
        <Serviceone data={Blog} links={BlogLinks}/>
        <ContactInner />
      </Layout>
    </>
  );
}