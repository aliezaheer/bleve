import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../styles/globals.css";

const ContactPage = () => {
  return (
    <div className="bg-white">
      <div className="bg-white pt-48 text-black">
        <Navbar />

        <ContactInfo />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
