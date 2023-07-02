import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const ContactPage = () => {
  return (
    <div>
      <div className="bg-black -mt-6 pt-4 pb-1">
        <Navbar />
      </div>
      <ContactInfo />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
