import Image from "next/image";
import computer from "../../public/computer.png";
import HomeFourthSec from "./HomeFourthSec";

// Third section on homepage

const BusinessProcess = () => {
  return (
    <>
      <div className="bg-lightPurple flex justify-between h-full pl-4 md:pl-1 pb-12">
        <div className="mt-12">
          <h2 className="text-2xl md:text-8xl md:ml-20 ">
            Bring All <br />
            Together
            <br />
            <span className="text-matchingTextPink text-6xl font-bold pl-4">
              For Faster
            </span>
            <br />
            <span className="ml-5 md:-ml-4"> Growth</span>
          </h2>
          <div className="flex flex-wrap flex-col-reverse">
            <div>
              <button
                className="bg-white text-lightPurple hover:opacity-70 text-lg py-5 px-8 mt-4 md:ml-14 rounded-full"
                variant="contained"
              >
                Learn More
              </button>
            </div>
            <div className="w-78 md:w-60 text-xs ml-0 md:ml-16 py-4">
              Without a clear brand, powerful website and effective online
              tools, this leads to wasted budget, poor results and less sales.
              We help you build the foundation your business needs to truly
              grow!
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Image src={computer} alt="" />
        </div>
      </div>
      <HomeFourthSec />
    </>
  );
};

export default BusinessProcess;
