import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";

const RootLayout = () => {
  return (
    <div className="container mx-auto px-5">
      <Navbar></Navbar>
      <div className="pt-[70px]">
        <Banner></Banner>
        <AboutMe></AboutMe>
        <Education></Education>
      </div>
    </div>
  );
};

export default RootLayout;
