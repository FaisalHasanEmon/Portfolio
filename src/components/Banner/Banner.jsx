import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-65px)]  w-full flex flex-col gap-8 md:flex-row justify-center md:justify-between  items-center ">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi! My name is Faisal Hasan Emon
        </h1>
        <h2 className="text-xl md:text-3xl font-bold">
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
        <div>
          <div className="flex justify-start items-center gap-2">
            <FaWhatsapp />
            <p>+880 1843226284</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <MdOutlineEmail />
            <p>faisalhasanemon@gmail.com</p>
          </div>
          <a
            href="https://github.com/FaisalHasanEmon"
            target="_blank"
            className="flex justify-start items-center gap-2"
          >
            <FaGithub />
            <p>github.com/faisalhasanemon</p>
          </a>

          <a
            href="https://www.linkedin.com/in/faisalhasanemon/"
            target="_blank"
            className="flex justify-start items-center gap-2"
          >
            <FaLinkedin />
            <p>linkedin.com/in/faisalhasanemon</p>
          </a>
          <div className="flex justify-start items-center gap-2">
            <IoLocation />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <button>
          <a
            href="https://docs.google.com/document/d/1xIgjIW2XiEn-AZzKkTkcIiNDAunIUDdB/edit?usp=sharing&ouid=108384474506151884483&rtpof=true&sd=true"
            target="_blank"
            className="btn text-2xl font-bold p-7 flex justify-center items-center gap-3"
          >
            Download CV <FaDownload />
          </a>
        </button>
      </div>

      <div>
        <figure className="h-[300px] w-[300px] rounded-tl-[250px] rounded-tr-[125px] rounded-bl-[100px] rounded-br-[168px] lg:h-[450px] lg:w-[450px] lg:rounded-tl-[375px] lg:rounded-tr-[187px] lg:rounded-bl-[150px] lg:rounded-br-[225px]  border-2  border-white shadow-cyan-300 shadow-md overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src="/mainPhoto.jpg"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
