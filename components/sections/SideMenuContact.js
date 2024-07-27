import React from "react";
import Link from 'next/link';
import CTAimage from '../../public/images/cta-image.jpg';

const SideMenuContact = () => {
  return (
    <>
      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="sticky-image" style={{ position: 'relative' }}>
                <img
                  src='https://images.unsplash.com/photo-1588733103629-b77afe0425ce?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuYWRhfGVufDB8fDB8fHww'
                  alt="Contact Us"
                />
                <div
                  className="inner"
                  style={{
                    position: 'absolute',
                    top: '50%', // Adjust vertically
                    left: '50%', // Adjust horizontally
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255, 255, 255, 0.8)', // Adjust background color
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <h4>Free VISA application</h4>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link href="/apply" className="theme-btn btn-style-one">
                    <span className="btn-title">Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="sticky-image"
        style={{
          position: 'fixed',
          top: '190%', // Adjust to place the image vertically
          left: '50%', // Adjust to place the image horizontally
          transform: 'translate(-50%, 0)',
          zIndex: 999,
        }}
      >
        <img src={CTAimage} alt="Contact Us" />
      </div>
    </>
  );
};

export default SideMenuContact;

