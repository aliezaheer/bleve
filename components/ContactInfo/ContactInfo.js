import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "tailwindcss/tailwind.css";

const ContactInfo = () => {
  return (
    <div className="flex justify-around mt-8 ">
      <div className="">
        <h2 className="text-5xl font-medium ">Contact Us</h2>
        <p className="text-#333 mt-5">
          Need to get in touch with us? Eiether fill out the form your inquiry
          or send the <br /> email at ceo@blevemedia.com
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactInfo;
