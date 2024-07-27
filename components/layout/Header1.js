import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import LogoDark from "./../../public/images/logo-dark.png";
import LogoWhite from "./../../public/images/logo.png";

const Header1 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
  return (
    <>
      <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              {/* Info List */}
              
            </div>
            {/* <div className="top-right">
              <ul className="useful-links">
                <li>
                  <Link href="#">Help</Link>
                </li>
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="outer-box">
            <ul className="social-icon-one">
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

        <div className="header-lower">
          {/* Main box */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image src={LogoWhite} title="Vixoz" />
                </Link>
              </div>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <NavLinks extraClassName="header1" />
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box">
               
                
                <Link href="/apply" className="theme-btn btn-style-one bg-theme-color3">
                  <span className="btn-title">Apply Now</span>
                </Link>
                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <Image src={LogoDark} title="Vizox" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu />
          
            <ul className="social-links">
           
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
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="index">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search..." required />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <Link href="/" title>
                  <Image src={LogoWhite} title="Vixoz" />
                </Link>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MobileMenu />
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
    </>
  );
};

export default Header1;
