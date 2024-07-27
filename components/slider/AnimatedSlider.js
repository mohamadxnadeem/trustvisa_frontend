import React from "react";
import Link from "next/link";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const AnimatedSlider = () => {
  const content = [
    {
      title: "Skilled Workers",
      button: "Apply Now",
      image: "/images/main-slider/1.png",
      description: "Canada calls, and your future responds",

    },
    {
      title: "Families",
      button: "Apply Now",
      image: "/images/main-slider/2.png",
      description: "Make Canada your family's new home sweet home",

    },
    {
      title: "International Students",
      button: "Apply Now",
      image: "/images/main-slider/3.png",
      description: "Canada awaits your Academic Journey",

    },
  ];
  return (
    <>
       <Slider className="slider-wrapper" autoplay="1000" infinite="true" previous="previous" previousButton="previousButton">
        {content.map((item, index) => (
          <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center center` }}>
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link href="/apply" className="theme-btn btn-style-one">
                <span className="btn-title">{item.button}</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AnimatedSlider;
