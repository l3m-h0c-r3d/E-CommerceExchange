import Image from "next/image";
import image from "../assets/images/Image.png";
import videofill from "../assets/images/video-fill.png";
import React from "react";

const UseApp = () => {
  return (
    <div className="relative top-20 w-full bg-BG_Basic py-10 h-1/2 sm:h-96 sm:shadow-sm sm:w-full mx-auto mb-10">
      <h1 className="w-full text-center font-bold text-xl sm:text-3xl text-white">
        How to use the app perfectly
      </h1>
      <p className="w-full text-center p-5 sm:mt-5 text-pink-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="relative lett-1/2">
        <Image
          className="absolute -bottom-72 sm:w-1/3 sm:left-1/3 sm:top-1/4"
          src={image}
          alt="đây là bộ ảnh"
        />
        <Image
          className="absolute left-48 w-8 top-20 z-10 sm:hidden"
          src={videofill}
          alt="đây là bộ ảnh"
        />
      </div>
    </div>
  );
};

export default React.memo(UseApp);
