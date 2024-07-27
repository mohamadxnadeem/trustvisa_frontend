import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const TrainingSliderOne = ({ programData }) => {
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
        className="training-slider1"
      >
        {programData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href={`/page-visa-details/${item.id}`}>
                      <img
                        src={`http://127.0.0.1:8000${item.cover_photo}`} // Use the correct image URL
                        alt={item.title}
                        title={item.title}
                        style={{
                          maxWidth: '270px', // Set the maximum width
                          maxHeight: '358px', // Set the maximum height
                          width: '100%', // Maintain aspect ratio
                          height: 'auto', // Maintain aspect ratio
                        }}
                      />
                    </Link>
                  </figure>

                  <div className="info-box">
                    <h5 className="title">
                      <Link href={`/page-visa-details/${item.id}`}>{item.title}</Link>
                    </h5>
                    <Link href={`/page-visa-details/${item.id}`} className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                  
                </div>

                <div className="overlay-content">
                  <div className="info-box">
                    <h5 className="title">
                      <Link href={`/page-visa-details/${item.id}`}>{item.title}</Link>
                    </h5>
                    <div className="text">{item.subTitle}</div>
                    <Link href={`/page-visa-details/${item.id}`} className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
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

export default TrainingSliderOne;

