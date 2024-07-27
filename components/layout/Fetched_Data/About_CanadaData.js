import { useState, useEffect } from 'react';
import Link from "next/link";


export function useAboutCanadaData() {
  const [aboutCanadaData, setAboutCanadaData] = useState([]);



  

  useEffect(() => {
    // Fetch About Canada data when the component mounts
    async function fetchAboutCanadaData() {
      try {
        const apiUrl = 'https://trustvisaapi-production.up.railway.app/api/about_canada/';
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAboutCanadaData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchAboutCanadaData();
  }, []);



  return aboutCanadaData;

}





// Define a function to render About Canada navigation links
export function renderAboutCanadaLinks(aboutCanadaData) {
  return aboutCanadaData.map((about) => (
    <li key={about.about_canada.id}>
      <Link href={`/about-canada/${about.about_canada.id}`}>
        {about.about_canada.title}
      </Link>
    </li>
  ));
}