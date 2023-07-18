import Image from "next/image";
import businessBg from "../../public/businessbBg.png";
import AllServices from "./AllServices";

// Fourth section on homepage

const HomeFourthSec = () => {
  return (
    <>
      <div className="bg-realBlue flex flex-col md:flex-row justify-between h-full pl-4 md:pl-1 py-12">
        <div className="mt-12 ">
          <h2 className="text-2xl md:text-8xl ml-0 md:ml-20">
            Partnering with <br />
            <span className="text-textBlue text-6xl font-bold pl-4">
              Bleve Media
            </span>
            <br />
            <span className="ml-5 md:-ml-4">
              & Get <br />
              Advantages
            </span>
          </h2>
          <div className="flex flex-wrap flex-col-reverse">
            <div>
              <button
                className="bg-white text-realBlue hover:opacity-70 text-lg py-5 px-8 mt-4 md:ml-14 rounded-full"
                variant="contained"
              >
                Learn More
              </button>
            </div>
            <div className="w-78 md:w-60 text-xs ml-0 md:ml-16 py-4 ">
              we can secure competitive pricing and deliver cost-effective
              solutions. We prioritize efficiency and promptness, ensuring
              timely order processing, seamless logistics, and reliable delivery
              to your doorstep. Our commitment to quality means that you can
              trust the products you receive from us are of the highest
              standard.
            </div>
          </div>
        </div>
        <div>
          <Image src={businessBg} alt="" />
        </div>
      </div>
      <AllServices />
    </>
  );
};

export default HomeFourthSec;
