import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useAboutCanadaData, renderAboutCanadaLinks } from './Fetched_Data/About_CanadaData'
import { useProgramData, renderProgramLinks } from './Fetched_Data/ProgramData';
import { useOrganizingForCanadaData, renderOrganizingForCanadaLinks } from './Fetched_Data/Organzing_for_canadaData'
import { useBlogData, renderBlogLinks } from './Fetched_Data/BlogData'

import Image from "next/image";

import LogoDark from "./../../public/images/logo-dark.png";

import RCIC from "./../../public/images/rcic.png";
import CCIC from "./../../public/images/ccic.png";






const Footer = () => {

     // Fetch Program Data: 

    // Use the custom hook to fetch About Canada data
    const aboutPragramData = useProgramData();

    // Use the rendering function to render About Canada navigation links
    const ProgramLinks = renderProgramLinks(aboutPragramData);


  // ====================================================================================

   // Use the custom hook to fetch About Canada data
   const aboutCanadaData = useAboutCanadaData();

   // Use the rendering function to render About Canada navigation links
   const aboutCanadaLinks = renderAboutCanadaLinks(aboutCanadaData);


    // ====================================================================================


    // Use the custom hook to fetch Organizing for Canada data
    const organizingForCanadaData = useOrganizingForCanadaData();

    // Use the rendering function to render Organizing for Canada navigation links
    const organizingForCanadaLinks = renderOrganizingForCanadaLinks(organizingForCanadaData);

    const blogData = useBlogData();
    const blogLinks = renderBlogLinks(blogData);
  
  


    return (
        <>
            <footer className="main-footer">
                <div className="auto-container">
                    <div className="upper-box">

                        <center>


                        <div className="logo-flex-box">
                               

                            <div className='logo-footer'>
                                <Link href="/">
                                    <Image src={RCIC} title="rcic" className='' />
                                </Link>
                            
                        
                                <Link href="/">
                                    <Image src={LogoDark} title="trust visa logo" />
                                </Link>
                            
                            
                                <Link href="/">
                                    <Image src={CCIC} title="ccic" />
                                </Link>
                    
                            </div>
                           

                             
                        </div>

                        </center>

                    </div>

                </div>
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                          
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-12 col-lg-12 col-md-12 mb-0">
                                <div className="footer-widget links-widget">


                                    <div className="row">
                                    

                                        <div className="col-lg-3 col-md-4 col-sm-12">
                                            <h5 className="widget-title">About Canada</h5>
                                            <ul>
                                                {aboutCanadaLinks}
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12">
                                            <h5 className="widget-title">Programs</h5>
                                            <ul>
                                                {ProgramLinks}
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12">
                                            <h5 className="widget-title">Organizing for Canada</h5>
                                            <ul>
                                                {organizingForCanadaLinks}
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12">
                                            <h5 className="widget-title">Blogs</h5>
                                            <ul>
                                                {blogLinks}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023 by <Link href="/">Trust Visa.org</Link>
                            </div>
                            <ul className="social-icon-two">
                                <li>
                                    <Link target="__blank" href="https://web.facebook.com/TrustVisa.Org?_rdc=1&_rdr">
                                    <i className="fab fa-facebook-f" />
                                    </Link>
                                </li>
                        
                                <li>
                                    <Link target="__blank" href="https://www.instagram.com/trustvisadotorg/">
                                    <i className="fab fa-instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;