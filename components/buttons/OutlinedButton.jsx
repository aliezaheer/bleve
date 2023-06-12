"use client";
import Button from "@mui/material/Button";

const OutlinedButton = ({ buttonText }) => {
  return (
    <Button
      className="bg-red hover:bg-hoverRed mt-4 py-3 ml-14 rounded-full"
      variant="contained"
    >
      {buttonText}
    </Button>
  );
};

export default OutlinedButton;
