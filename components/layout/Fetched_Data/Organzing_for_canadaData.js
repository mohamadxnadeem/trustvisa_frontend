import { useState, useEffect } from 'react';
import Link from "next/link";


export function useOrganizingForCanadaData() {
  const [organizingForCanadaData, setOrganizingForCanadaData] = useState([]);

  useEffect(() => {
    // Fetch Organizing for Canada data when the component mounts
    async function fetchOrganizingForCanadaData() {
      try {
        const apiUrl = 'https://trustvisaapi-production.up.railway.app/api/organizing_for_canada/';
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setOrganizingForCanadaData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchOrganizingForCanadaData();
  }, []);

  return organizingForCanadaData;
}

// Define a function to render Organizing for Canada navigation links
export function renderOrganizingForCanadaLinks(organizingForCanadaData) {
  return organizingForCanadaData.map((organizing) => (
    <li key={organizing.organizing_for_canada.id}>
      <Link href={`/organizing-for-canada/${organizing.organizing_for_canada.id}`}>
        {organizing.organizing_for_canada.title}
      </Link>
    </li>
  ));
}