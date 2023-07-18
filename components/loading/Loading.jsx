// components/Loading.js
import "../../styles/globals.css";
import logo from "../../public/logo.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      <Image class="loading-image" width={70} src={logo} />
    </div>
  );
};

export default Loading;
