import { useState, useEffect } from 'react';
import Link from "next/link";

export function useBlogData() {
    const [BlogData, setBlogData] = useState([]);
  
  
    
  
    useEffect(() => {
      // Fetch blog Canada data when the component mounts
      async function fetchBlogData() {
        try {
          const apiUrl = 'https://trustvisaapi-production.up.railway.app/api/blog/';
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setBlogData(data);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      }
  
      fetchBlogData();
    }, []);
  
    return BlogData;
  }
  
  
  
  
  // Define a function to render blog Canada navigation links
  export function renderBlogLinks(BlogData) {
    return BlogData.map((blog) => (
      <li key={blog.id}>
        <Link href={`/blogs/${blog.id}`}>
          {blog.title}
        </Link>
      </li>
    ));
  }