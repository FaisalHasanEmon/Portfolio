import React from "react";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-65px)]  w-full flex flex-col md:flex-row justify-center md:justify-between  items-center ">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold">Hi! My name is Faisal Hasan Emon</h1>
        <h2 className="text-4xl font-bold">
          I am a <t></t>
          <ReactTyped
            strings={[
              "Web developer",
              "Front-end developer",
              "MERN stack developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <button className="btn text-2xl font-bold p-7 flex justify-center items-center gap-3">
          Download CV <FaDownload />
        </button>
      </div>

      <div>
        <figure className="h-[450px] w-[450px] rounded-tl-[375px] rounded-tr-[187px] rounded-bl-[150px] rounded-br-[225px]  border-2  border-white shadow-cyan-300 shadow-md overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src="/src/assets/mainPhoto.jpg"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
