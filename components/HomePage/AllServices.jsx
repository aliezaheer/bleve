import React from "react";
import Footer from "../Footer";
import BeforeFooter from "./BeforeFooter";

const AllServices = () => {
  return (
    <div id="about" className="hidden lg:block">
      <h2 className="text-matchingTextPink text-6xl font-bold text-center mt-10">
        Our Services
      </h2>
      <div className="w-96 text-xs text-center mt-5 mx-auto">
        Join the digital marketing revolution with our full-service agency,
        leading the way in the future of marketing. From design and development
        to SEO, social media management, email marketing, and automation
        services, we'll help you succeed in the digital age.
      </div>
      <section className="services-sec">
        <div className="row">
          <div className="column">
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
                provides a smooth and user-friendly experience. At Blevemedia,
                we specialize in creating custom websites that are tailored to
                meet the unique needs of each client.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="service-icons"
                  src="https://cdn-icons-png.flaticon.com/512/7075/7075373.png"
                />
              </div>
              <h3>App Development</h3>
              <p className="sm:text-xs">
                Mobile apps have become an integral part of modern-day business,
                allowing businesses to reach and engage their customers
                on-the-go. At Blevemedia, we specialize in creating custom
                mobile apps that are developed to meet the unique needs of each
                client.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="service-icons"
                  src="https://cdn-icons-png.flaticon.com/512/9641/9641463.png"
                />
              </div>
              <h3>Software Development</h3>
              <p className="sm:text-xs">
                Custom software can be a game-changer for businesses looking to
                improve efficiency, productivity, and profitability. Whether you
                need a mobile app, a desktop application, or a web-based
                solution, our team of software developers can help you bring
                your idea to life. We use the latest development tools and
                technologies to create custom software.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="service-icons"
                  src="https://cdn-icons-png.flaticon.com/512/5187/5187237.png"
                />
              </div>
              <h3>IT reseliing</h3>
              <p className="sm:text-xs">
                Discover the power of IT reselling, our cutting-edge service at
                BleveMedia. We source and provide top-tier technology solutions,
                tailored to meet your business needs. With our expertise in IT
                reselling, we ensure that you have access to the latest and most
                innovative technology products and services to drive your
                business forward.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="service-icons"
                  src="https://cdn-icons-png.flaticon.com/512/9552/9552454.png"
                />
              </div>
              <h3>Social Media Marketing</h3>
              <p className="sm:text-xs">
                Social media has become an essential part of modern-day
                marketing, allowing businesses to connect with their customers
                and promote their products and services. We specialize in
                creating custom social media marketing strategies that are
                tailored to meet the unique needs of each client.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  className="service-icons"
                  src="https://cdn-icons-png.flaticon.com/512/253/253667.png"
                />
              </div>
              <h3>Graphics Design</h3>
              <p className="sm:text-xs">
                Our team of designers has extensive experience in creating
                designs that represent your business and engage your target
                audience. We take pride in our ability to deliver high-quality
                graphic designs that exceed our clients' expectations. Our goal
                is to help you create a visual identity that represents your
                business and engages your target audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default AllServices;
