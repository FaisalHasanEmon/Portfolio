import React from "react";
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiReactrouter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="h-[calc(100vh-65px)] flex justify-center items-center flex-col gap-9">
      <div className="w-full">
        <h1 className=" text-5xl font-bold  mb-10 text-left">{"<skills/>"}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
        {/* Card-1 */}
        <div className="card w-full bg-base-100 card-md  shadow-2xl">
          <div className="card-body">
            <h2 className=" text-center text-xl font-bold">
              Front-end and user verification
            </h2>
            <div className="mt-5 flex gap-3 justify-evenly  items-center flex-wrap *:flex *:flex-col *:justify-center *:items-center">
              <div>
                <FaReact size={30} />
                <p>React</p>
              </div>
              <div>
                <SiReactrouter size={30} />
                <p>React Router</p>
              </div>
              <div>
                <RiTailwindCssFill size={30} />
                <p>TailwindCSS</p>
              </div>
              <div>
                <SiDaisyui size={30} />
                <p>DaisyUI</p>
              </div>
              <div>
                <IoLogoFirebase size={30} />
                <p>Firebase</p>
              </div>
              <div>
                <FaNodeJs size={30} />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card-2 */}
        <div className="card w-full bg-base-100 card-md  shadow-2xl">
          <div className="card-body">
            <h2 className=" text-center text-xl font-bold">
              Back-end and database
            </h2>
            <div className="mt-5 flex gap-3 justify-evenly  items-center flex-wrap *:flex *:flex-col *:justify-center *:items-center">
              <div>
                <SiExpress size={30} />
                <p>Express Js</p>
              </div>
              <div>
                <SiMongodb size={30} />
                <p>MongoDB</p>
              </div>
              <div>
                <FaNodeJs size={30} />
                <p>NodeJs</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card-3 */}
        <div className="card w-full bg-base-100 card-md  shadow-2xl">
          <div className="card-body">
            <h2 className=" text-center text-xl font-bold">
              Version Control & Tools
            </h2>
            <div className="mt-5 flex gap-3 justify-evenly  items-center flex-wrap *:flex *:flex-col *:justify-center *:items-center">
              <div>
                <FaGitAlt size={30} />
                <p>Git</p>
              </div>
              <div>
                <FaGithub size={30} />
                <p>GitHub</p>
              </div>
              <div>
                <VscVscode size={30} />
                <p>Vs Code</p>
              </div>
              <div>
                <FaFigma size={30} />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card-4 */}
        <div className="card w-full bg-base-100 card-md  shadow-2xl">
          <div className="card-body">
            <h2 className=" text-center text-xl font-bold">
              Previous Knowledge With
            </h2>
            <div className="mt-5 flex gap-3 justify-evenly  items-center flex-wrap *:flex *:flex-col *:justify-center *:items-center">
              <div>
                <p className="text-[30px]">C</p>
                <p></p>
              </div>
              <div>
                <p className="text-[30px]">C++</p>
                <p></p>
              </div>
              <div>
                <FaJava size={35} />
                <p>Java</p>
              </div>
              <div>
                <SiMysql size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
