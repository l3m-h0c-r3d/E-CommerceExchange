import React from "react";
import topping1 from "../assets/images/toppng 1.png";
import topping2 from "../assets/images/PngItem_1144050 2.png";
import Reactangle from "../components/Reactangle";
import appdesign from "../assets/images/App Desgin.png";
import Image from "next/image";
import { suggest } from "@/item.global";

const DowLoadApp = () => {
  return (
    <div className="sm:w-5/6 sm:mx-auto sm:flex sm:shadow-xl">
      <div className="w-full flex flex-col gap-10 sm:w-2/3 sm:mx-auto">
        <h1 className="font-bold text-2xl mx-8">Download App Now</h1>
        <p className="mx-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </p>
        <div className="w-fit flex gap-4 mx-8">
          <Image className="w-1/3" src={topping1} alt="" />
          <Image className="w-1/3" src={topping2} alt="" />
        </div>
        <div className="mx-8 gap-3 flex justify-around sm:mx-7">
          {suggest.map((itm) => (
            // eslint-disable-next-line react/jsx-key
            <Reactangle
              number={itm.number}
              interact={itm.interact}
              img={itm.img}
            />
          ))}
        </div>
      </div>
      <Image
        src={appdesign}
        className=" hidden sm:block sm:w-1/3 sm:mx-auto"
        alt=""
      />
    </div>
  );
};

export default React.memo(DowLoadApp);
