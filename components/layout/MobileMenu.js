import Link from "next/link";
import { useState, useEffect } from "react";
import { useAboutCanadaData, renderAboutCanadaLinks } from './Fetched_Data/About_CanadaData'
import { useProgramData, renderProgramLinks } from './Fetched_Data/ProgramData';
import { useOrganizingForCanadaData, renderOrganizingForCanadaLinks } from './Fetched_Data/Organzing_for_canadaData'
import { useBlogData, renderBlogLinks } from './Fetched_Data/BlogData'
import { useRouter } from "next/router";






const MobileMenu = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const [isSubActive, setSubIsActive] = useState({
    status: false,
    key: "",
  });

  const handleSubClick = (key) => {
    if (isSubActive.key === key) {
      setSubIsActive({
        status: false,
      });
    } else {
      setSubIsActive({
        status: true,
        key,
      });
    }
  };
// Fetch Program Data: 

    // Use the custom hook to fetch About Canada data
    const aboutPragramData = useProgramData();
    const ProgramLinks = renderProgramLinks(aboutPragramData);

   const aboutCanadaData = useAboutCanadaData();
   const aboutCanadaLinks = renderAboutCanadaLinks(aboutCanadaData);

    const organizingForCanadaData = useOrganizingForCanadaData();
    const organizingForCanadaLinks = renderOrganizingForCanadaLinks(organizingForCanadaData);

    const blogData = useBlogData();
    const blogLinks = renderBlogLinks(blogData);

    const router = useRouter();


    useEffect(() => {
      const navLinks = document.querySelectorAll(".navigation a");
      navLinks.forEach((link) => {
        if (link.pathname === router.asPath) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    }, [router.asPath]);
  

  return (
    <>
      <ul className="navigation clearfix">

        <li  className={router.asPath === "/why_us" ? "current" : ""}>

          <Link href="/why_us">Why Us?</Link>
        
          <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}>
          </div>
        </li>
      
        <li className={`dropdown ${router.asPath.startsWith("/about-canada/") ? "current" : ""}`}>
          <Link href="/page-about">About Canada</Link>
          <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
            {aboutCanadaLinks}    
          </ul>
          <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li className={`dropdown ${router.asPath.startsWith("/page-visa-details/") ? "current" : ""}`}>
          <Link href="#">Programs</Link>
          <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
            {ProgramLinks}
          </ul>
          <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>

      
        <li className={`dropdown ${router.asPath.startsWith("/organizing-for-canada/") ? "current" : ""}`}>
          <Link href="#">Organizing for Canada</Link>
          <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
          
            {organizingForCanadaLinks}

      
          </ul>
          <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>

        <li className={`dropdown ${router.asPath.startsWith("/blogs/") ? "current" : ""}`}>
          <Link href="#">Blogs</Link>
          <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
          
            {blogLinks}

      
          </ul>
          <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
    
        
      </ul>
    </>
  );
};

export default MobileMenu;
