import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      delay:"-1",
      duration:2,
      ease:"Expo.easeInOut"
    });
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      delay:"-.8",
      duration:2,
      ease:"Expo.easeInOut"
    });
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      delay:"-.8",
      duration:2,
      ease:"Expo.easeInOut"
    });
    gsap.to(".character",{
      scale:1.5,
      x:"-10%",
      rotate:0,
      bottom:"-12%",
      delay:"-.8",
      duration:2,
      ease:"Expo.easeInOut"
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full h-screen rotate-[-10deg] scale-[1.7]  bg-black">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="absolute top-0 left-0 z-[10] navbar w-full py-10 px-10 ">
              <div className="logo flex gap-7 ">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-9 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[10px] leading-none text-white">
                  Rokstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen  overflow-hidden">
              <img
                className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover "
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover "
                src="./bg.png"
                alt=""
              />

              <div className="text text-white flex flex-col gap-3 absolute top-10 scale-[0.96]  left-1/2 -translate-x-1/2 ">
                <h1 className="text-[8rem] leading-none -ml-25">grand</h1>
                <h1 className="text-[8rem] leading-none ml-5">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-20">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 
             w-[250px] md:w-[270px] lg:w-[270px]
             scale-[4] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white w-full absolute bottom-0 left-0 py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className=" text-2xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2      h-[55px] -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full overflow-hidden h-screen flex  items-center justify-center bg-black">
            <div className="cntnr text-white flex w-full h-[80%]  ">
              <div className="limg relative w-1/2 h-full">
                <img className="absolute scale-[0.92] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" />
              </div>
              <div className="rg w-[50%] ">
                <h1 className="text-7xl">Still Running,</h1>
                <h1 className="text-7xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit iure illo fuga expedita! Dolore quasi velit asperiores quam cum officia tempore sint?</p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum animi aperiam aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ratione cumque? Cumque odio quibusdam similique culpa facere illo.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit iure illo fuga expedita! Dolore quasi velit asperiores quam cum officia tempore sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora!</p>
                <button className="bg-yellow-500 mt-5 px-8 py-5 text-2xl text-black">Download Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
