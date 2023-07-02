import Services from "../HomePage/Services";

const Hero = () => {
  return (
    <div className="absolute -z-10 -mt-36">
      <video className="-z-10" autoPlay muted loop>
        <source src="/bgVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-7xl font-bold text-white leading-tight">
          Unlock The
          <br />
          <span>Power Of</span>
          <br />
          <span className="ml-6 text-red">
            IT Reselling <br />
          </span>
          Services
        </h1>

        <button
          className="bg-red hover:bg-hoverRed mt-4 ml-14  py-5 px-12 rounded-full"
          variant="contained"
        >
          Get Expert Mentorship
        </button>
      </div>
      <Services />
    </div>
  );
};

export default Hero;
