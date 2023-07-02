import Link from "next/link";

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
        <Link href="/contact">
          <button
            className="bg-red hover:bg-black text-white hover:opacity-100 text-lg py-5 px-8 mt-4  ml-14 rounded-full"
            variant="contained"
          >
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BeforeFooter;
