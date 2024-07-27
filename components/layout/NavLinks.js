import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  useAboutCanadaData,
  renderAboutCanadaLinks,
} from "./Fetched_Data/About_CanadaData";
import { useProgramData, renderProgramLinks } from "./Fetched_Data/ProgramData";
import {
  useOrganizingForCanadaData,
  renderOrganizingForCanadaLinks,
} from "./Fetched_Data/Organzing_for_canadaData";
import { useBlogData, renderBlogLinks } from "./Fetched_Data/BlogData";

const NavLinks = ({ extraClassName, nextdata }) => {
  const router = useRouter();

  const aboutProgramData = useProgramData();
  const ProgramLinks = renderProgramLinks(aboutProgramData);

  const aboutCanadaData = useAboutCanadaData();
  const aboutCanadaLinks = renderAboutCanadaLinks(aboutCanadaData);

  const organizingForCanadaData = useOrganizingForCanadaData();
  const organizingForCanadaLinks = renderOrganizingForCanadaLinks(
    organizingForCanadaData
  );

  const blogData = useBlogData();
  const blogLinks = renderBlogLinks(blogData);

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
    <ul className={`navigation ${extraClassName}`}>
      <li className={router.asPath === "/why_us" ? "current" : ""}>
        <Link href="/why_us">Why Us ?</Link>
      </li>

    

      <li className={`dropdown ${router.asPath.startsWith("/about-canada/") ? "current" : ""}`}>
        <Link href="/">About Canada</Link>
        <ul>
          {aboutCanadaLinks}
        </ul>
      </li>

      <li className={`dropdown ${router.asPath.startsWith("/page-visa-details/") ? "current" : ""}`}>
        <Link href="/">Programs</Link>
        <ul>
          {ProgramLinks}
        </ul>
      </li>

      <li className={`dropdown ${router.asPath.startsWith("/organizing-for-canada/") ? "current" : ""}`}>
        <Link href="/">Organizing for Canada</Link>
        <ul>
          {organizingForCanadaLinks}
        </ul>
      </li>

      <li className={`dropdown ${router.asPath.startsWith("/blogs/") ? "current" : ""}`}>
        <Link href="/">Blogs</Link>
        <ul>
          {blogLinks}
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
