"use client";
import Button from "@mui/material/Button";

const PinkButton = ({ buttonText }) => {
  return (
    <Button
      className="bg-white text-lightPurple hover:opacity-70 text-lg py-5 px-8 mt-4  ml-14 rounded-full"
      variant="contained"
    >
      {buttonText}
    </Button>
  );
};

export default PinkButton;
