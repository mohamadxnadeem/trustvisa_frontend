import { useState, useEffect } from 'react';
import Link from "next/link";


export function useProgramData() {
  const [programData, setProgramData] = useState([]);

  useEffect(() => {
    // Fetch Program data when the component mounts
    async function fetchProgramData() {
      try {
        const apiUrl = 'https://trustvisaapi-production.up.railway.app/api/programs/';
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProgramData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchProgramData();
  }, []);

  return programData;
}

// Define a function to render Program navigation links
export function renderProgramLinks(programData) {
  return programData.map((program) => (
    <li key={program.programs.id}>
      <Link href={`/page-visa-details/${program.programs.id}`}>
        {program.programs.title}
      </Link>
    </li>
  ));
}