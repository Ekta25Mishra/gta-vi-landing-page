import React, { useState } from "react";

const ToggleButton = ({ show, onToggle }) => {
  return (
    <>
      <button
        onClick={onToggle}
        type="button"
        className="flex gap-4 items-center bg-transparent border-none text-white cursor-pointer"
      >
        <i className="text-2xl ri-arrow-down-line"></i>
        <span className="text-xl font-[Helvetica_Now_Display]">
          {show ? "Hide Sections" : "Show Sections"}
        </span>
      </button>
    </>
  );
};

export default ToggleButton;
