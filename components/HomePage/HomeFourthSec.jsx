import Image from "next/image";
import businessBg from "../../public/businessbBg.png";
import AllServices from "./AllServices";

// Fourth section on homepage

const HomeFourthSec = () => {
  return (
    <>
      <div className="bg-realBlue flex justify-between h-full ">
        <div className="mt-12 absolute">
          <h2 className="text-4xl md:text-8xl ml-20 ">
            Partnering with <br />
            <span className="text-textBlue text-6xl font-bold pl-4">
              Bleve Media
            </span>
            <br />
            <span className="-ml-4">
              & Get <br />
              Advantages
            </span>
          </h2>
          <div className="flex">
            <div>
              <button
                className="bg-white text-realBlue hover:opacity-70 text-lg py-5 px-8 mt-4  ml-14 rounded-full"
                variant="contained"
              >
                Learn More
              </button>
            </div>
            <div className="w-60 text-xs ml-5 ">
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
