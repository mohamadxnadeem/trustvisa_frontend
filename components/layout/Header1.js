import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import LogoDark from "./../../public/images/logo-dark.png";
import LogoWhite from "./../../public/images/logo.png";

const Header1 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {

  useEffect(() => {
    const initGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'pt',  // Set the default language to Portuguese
          includedLanguages: 'en,es,pt',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    const addTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//translate.google.com/translate_a/element.js?cb=initGoogleTranslate';
      document.body.appendChild(script);
      window.initGoogleTranslate = initGoogleTranslate;
    };

    addTranslateScript();

    return () => {
      // Clean up any added scripts or elements
      const script = document.getElementById('google-translate-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
            <div id="google_translate_element" style={{ marginLeft: '10px' }}></div>

            </div>
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
              <li>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image src={LogoWhite} title="Vixoz" />
                </Link>
              </div>
            </div>
            <div className="nav-outer">
              <nav className="nav main-menu">
                <NavLinks extraClassName="header1" />
              </nav>
              <div className="outer-box">
                <Link href="/apply" className="theme-btn btn-style-one bg-theme-color3">
                  <span className="btn-title">Apply Now</span>
                </Link>
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
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
               <div id="google_translate_element" style={{ marginLeft: '10px' }}></div>
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

        <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/" title>
                  <Image src={LogoWhite} title="Vixoz" />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MobileMenu />
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
