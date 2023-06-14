import { Button } from "@mui/material";
import React from "react";

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
        <Button
          className="bg-white text-hoverRed hover:opacity-70 text-lg py-5 px-8 mt-4  ml-14 rounded-full"
          variant="contained"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default BeforeFooter;
