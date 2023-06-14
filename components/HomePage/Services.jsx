import Image from "next/image";
import servicesBg from "../../public/servicesBg.png";
import BusinessProcess from "./BusinessProcess";

import CyanButton from "@/buttons/CyanButton";

// Second section on homepage

const Services = () => {
  return (
    <div className="bg-lightPurple -z-40">
      <div className="bg-secondSec flex justify-around h-full transform -rotate-1 -z-10">
        <div className="mt-20">
          <h2 className="text-8xl ml-20 w-full leading-none">
            <span className="relative">
              <span className="absolute top-0 left-0 transform -skew-y-6 bg-gray-100 h-8 w-24 -ml-4"></span>
              Services
            </span>
            <br />
            <span className="text-matchingTextCyan text-6xl font-bold pl-4">
              Brand, Build, Grow
            </span>
            <br />
            <span className="-ml-4">INSTANTLY</span>
          </h2>
          <div className="flex align-middle">
            <div>
              <CyanButton buttonText="Learn More" />
            </div>
            <div className="w-60 text-xs ml-5 ">
              Our team analyzes and measures your brand’s message and online
              health with an in-depth brand analysis. We highlight your brand’s
              strengths, weaknesses, threats, and opportunities. Then we develop
              a brand story and strategy so you can truly connect with your
              future loyal customers.
            </div>
          </div>
        </div>
        <div>
          <Image src={servicesBg} alt="" />
        </div>
      </div>
      <BusinessProcess />
    </div>
  );
};

export default Services;
