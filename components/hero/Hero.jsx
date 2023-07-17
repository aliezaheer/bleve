import Link from "next/link";
import Services from "../HomePage/Services";

const Hero = () => {
  return (
    <div className="absolute -z-10 -mt-24">
      <div class="video-background">
        <video className="-z-10" autoPlay muted loop>
          <source src="/bgVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2  md:-translate-y-1/4">
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
          Unlock The
          <br />
          <span>Power Of</span>
          <br />
          <span className="ml-6 text-red">
            IT Reselling <br />
          </span>
          Services
        </h1>
        <Link href="/contact">
          <button
            className="bg-red text-sm w-64 md:w-58 md:text-md hover:bg-hoverRed mt-4 py-5 px-12 rounded-full ml-0 md:ml-20"
            variant="contained"
          >
            Get Expert Mentorship
          </button>
        </Link>
      </div>
      <Services />
    </div>
  );
};

export default Hero;
