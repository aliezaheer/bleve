import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "tailwindcss/tailwind.css";

const ContactInfo = () => {
  return (
    <div className="flex justify-around mt-8 ">
      <div className="">
        <h2>Contact Us</h2>
        <p className="text-red">
          Need to get in touch with us? Eiether fill out the form your inquiry
          or send the <br /> email at ceo@blevemedia.com
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactInfo;
