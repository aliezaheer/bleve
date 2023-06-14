import React from "react";
import RedButton from "../buttons/RedButton";

const BeforeFooter = () => {
  return (
    <div className="flex justify-around items-center bg-white text-black h-60">
      <div>
        <h2 className="text-3xl ">
          Get done <br />
          Your next
          <br />
          <span className="text-hoverRed text-5xl font-bold pl-3">Project</span>
          <br />
          <span className=""> With Us</span>
        </h2>
      </div>
      <div>
        <RedButton buttonText="Get In Touch" />
      </div>
    </div>
  );
};

export default BeforeFooter;
