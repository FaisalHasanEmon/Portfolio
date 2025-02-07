import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import { Element } from "react-scroll";
import Skills from "../components/Skills/Skills";
const RootLayout = () => {
  return (
    <div className="container mx-auto px-5 ">
      <Navbar></Navbar>
      <div className="pt-[70px] *:mb-4">
        <Element name="home">
          <Banner></Banner>
        </Element>
        <div>
          <div className="divider"></div>
          <Element name="about-me">
            <AboutMe></AboutMe>
          </Element>
        </div>
        <div>
          <div className="divider"></div>
          <Element name="education">
            <Education></Education>
          </Element>
        </div>
        <div>
          <div className="divider"></div>
          <Element name="skills">
            <Skills></Skills>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
