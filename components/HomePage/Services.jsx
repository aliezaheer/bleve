import Image from "next/image";
import servicesBg from "../../public/servicesBg.png";
import BusinessProcess from "./BusinessProcess";

// Second section on homepage

const Services = () => {
  return (
    <section id="services">
      <div className="after-hero bg-lightPurple -z-40 mt-96 md:mt-0 ">
        <div className="service-sect bg-secondSec flex flex-col md:flex-row justify-around h-full transform rotate-0 md:transform md:-rotate-1 -z-10 pl-4 md:pl-1 py- ">
          <div className="mt-20">
            <h2 className="text-2xl md:text-8xl md:ml-20 w-full leading-none">
              <span className="">
                <span className=" transform -skew-y-6 bg-gray-100 h-8 w-24 "></span>
                Services
              </span>
              <br />
              <span className="ml-[-3px] text-matchingTextCyan text-6xl font-bold mt-10  pl-0 md:pl-4">
                Brand, Build, Grow
              </span>
              <br />
              <span style={{ marginTop: "10px" }}>INSTANTLY</span>
            </h2>
            <div className="flex flex-wrap flex-col-reverse align-middle">
              <div>
                <button
                  className="bg-white text-secondSec hover:opacity-70 text-lg py-5 px-8 mt-4 md:ml-14 rounded-full"
                  variant="contained"
                >
                  LernMore
                </button>
              </div>
              <div className="w-78 md:w-60 text-xs ml-0 md:ml-16 py-4 ">
                Our team analyzes and measures your brand’s message and online
                health with an in-depth brand analysis. We highlight your
                brand’s strengths, weaknesses, threats, and opportunities. Then
                we develop a brand story and strategy so you can truly connect
                with your future loyal customers.
              </div>
            </div>
          </div>
          <div className=" ">
            <Image src={servicesBg} alt="" />
          </div>
        </div>
        <BusinessProcess />
      </div>
    </section>
  );
};

export default Services;
