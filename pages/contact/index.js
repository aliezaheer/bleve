import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../styles/globals.css";

const ContactPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white pt-32 2xl:py-48 text-black">
        <ContactInfo />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
