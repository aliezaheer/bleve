"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

import BeforeFooter from "../HomePage/BeforeFooter";
import Footer from "../Footer";

import { Navigation } from "swiper/modules";

const ServiceSlider = () => {
  // Define the swiper options
  const swiperOptions = {
    spaceBetween: 50,
    slidesPerView: 3,
    // Other Swiper options
  };

  // Adjust the swiper options for mobile view
  const mobileSwiperOptions = {
    ...swiperOptions,
    slidesPerView: 1,
    // Any other adjustments specific to mobile view
  };

  return (
    <div className="block md:hidden">
      <h2 className="text-matchingTextPink text-6xl font-bold text-center mt-10">
        Our Services
      </h2>
      <div className="w-96 text-xs text-center mt-5 mx-auto mb-8">
        Join the digital marketing revolution with our full-service agency,
        leading the way in the future of marketing. From design and development
        to SEO, social media management, email marketing, and automation
        services, we'll help you succeed in the digital age.
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card">
            <div className="icon-wrapper">
              <img
                className="service-icons"
                src="https://cdn-icons-png.flaticon.com/512/2704/2704022.png"
              />
            </div>
            <h3>Web Development</h3>
            <p className="sm:text-xs">
              In today's digital age, a website is often the first point of
              contact between a business and its potential customers. It's
              essential to have a website that not only looks great but also
              provides a smooth and user-friendly experience. At Blevemedia, we
              specialize in creating custom websites that are tailored to meet
              the unique needs of each client.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="icon-wrapper">
              <img
                className="service-icons"
                src="https://cdn-icons-png.flaticon.com/512/2704/2704022.png"
              />
            </div>
            <h3>Web Development</h3>
            <p className="sm:text-xs">
              In today's digital age, a website is often the first point of
              contact between a business and its potential customers. It's
              essential to have a website that not only looks great but also
              provides a smooth and user-friendly experience. At Blevemedia, we
              specialize in creating custom websites that are tailored to meet
              the unique needs of each client.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="icon-wrapper">
              <img
                className="service-icons"
                src="https://cdn-icons-png.flaticon.com/512/2704/2704022.png"
              />
            </div>
            <h3>Web Development</h3>
            <p className="sm:text-xs">
              In today's digital age, a website is often the first point of
              contact between a business and its potential customers. It's
              essential to have a website that not only looks great but also
              provides a smooth and user-friendly experience. At Blevemedia, we
              specialize in creating custom websites that are tailored to meet
              the unique needs of each client.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="icon-wrapper">
              <img
                className="service-icons"
                src="https://cdn-icons-png.flaticon.com/512/2704/2704022.png"
              />
            </div>
            <h3>Web Development</h3>
            <p className="sm:text-xs">
              In today's digital age, a website is often the first point of
              contact between a business and its potential customers. It's
              essential to have a website that not only looks great but also
              provides a smooth and user-friendly experience. At Blevemedia, we
              specialize in creating custom websites that are tailored to meet
              the unique needs of each client.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="icon-wrapper">
              <img
                className="service-icons"
                src="https://cdn-icons-png.flaticon.com/512/2704/2704022.png"
              />
            </div>
            <h3>Web Development</h3>
            <p className="sm:text-xs">
              In today's digital age, a website is often the first point of
              contact between a business and its potential customers. It's
              essential to have a website that not only looks great but also
              provides a smooth and user-friendly experience. At Blevemedia, we
              specialize in creating custom websites that are tailored to meet
              the unique needs of each client.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Add another Swiper for mobile view */}
      <div className="mobile-swiper">
        <Swiper modules={[Navigation]} {...mobileSwiperOptions}>
          {/* Your slides */}
        </Swiper>
      </div>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default ServiceSlider;
