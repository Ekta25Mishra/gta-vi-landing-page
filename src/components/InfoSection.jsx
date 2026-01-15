import React from "react";
import Section from "./Section";
import gsap from "gsap";

const InfoSection = ({sectionsData}) => {

  const handleDownloadClick=()=>{
    gsap.timeline()
    .to(".download-btn" , {
      scale:0.95,
      duration:0.15,
      ease:"power2.out"
    })
    .to(".download-btn",{
      scale:1,
      duration:0.15,
      ease:"power2.in"
    });
  };

  return (
    <>
      <div className="w-full overflow-hidden h-screen flex  items-center justify-center bg-black">
        <div className="cntnr text-white flex w-full h-[80%]  ">
          <div className="limg relative w-1/2 h-full">
            <img
              className="absolute scale-[0.92] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="./imag.png"
            />
          </div>
          <div className="rg w-[50%] ">
            <h1 className="text-7xl">Still Running,</h1>
            <h1 className="text-7xl">Not Hunting</h1>
            <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
              {sectionsData.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  text={section.text}
                />
              ))}
            </p>

            <button 
            onClick={handleDownloadClick}
            className="bg-yellow-500 download-btn mt-5 px-8 py-5 text-2xl text-black cursor-pointer ">
              Download Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
