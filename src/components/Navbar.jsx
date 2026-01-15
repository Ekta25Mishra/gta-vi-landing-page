import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="absolute top-0 left-0 z-[10] navbar w-full py-10 px-10 ">
        <div className="logo flex gap-7 ">
          <div className="lines flex flex-col gap-[5px]">
            <div className="line w-15 h-2 bg-white"></div>
            <div className="line w-9 h-2 bg-white"></div>
            <div className="line w-5 h-2 bg-white"></div>
          </div>
          <h3 className="text-4xl -mt-[10px] leading-none text-white">
            {/* Rokstar */}
            {props.title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
