import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);



const TrainingSliderTwo = ({ data, linkPrefix  }) => {

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="training-slider2"
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className="training-block-three">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href={`/${linkPrefix}/${item.id}`}>
                    <img
                        loading="lazy"
                        src={item.cover_photo} // Use the correct image URL
                        alt={item.title}
                        title={item.title}
                        style={{
                         
                          width: '100%', // Maintain aspect ratio
                          height: 'auto', // Maintain aspect ratio
                        }}
                      />
                    </Link>
                  </figure>
                  <Link href={`/${linkPrefix}/${item.id}`} className="read-more">
                    <i className="fa fa-long-arrow-alt-right" />
                  </Link>
                  <div className="info-box">
                    <h4 className="title">
                      <Link href={`/${linkPrefix}/${item.id}`}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <h4 className="title">
                      <Link href={`/${linkPrefix}/${item.id}`}>{item.title}</Link>
                    </h4>
                    <div className="text">{item.subTitle}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TrainingSliderTwo;