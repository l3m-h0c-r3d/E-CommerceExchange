import React from "react";
import remove from "../assets/images/Remove.png";
import Image from "next/image";
import { Menus } from "@/interface/interface";

const Menu: React.FC<Menus> = (props) => {
  const { onBolds, onCloses } = props;

  return (
    <div className="lg:hidden z-50 w-max sm:p-5 absolute top-16 left-5 font-bold text-sm sm:left-10 lg:left-20 grid grid-rows-4 gap-y-5 shadow-2xl bg-white p-5 hover:underline">
      <Image
        alt=""
        className="absolute right-1 w-4 h-4 "
        onClick={onCloses}
        src={remove}
      />
      <div
        className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
        onClick={() => {
          onBolds();
        }}
      >
        Home
      </div>
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Features
      </div>
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Screenshot
      </div>
      <div
        className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
        onClick={() => {
          onBolds();
        }}
      >
        Blog
      </div>
    </div>
  );
};
export default React.memo(Menu);
