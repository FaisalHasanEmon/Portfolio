import React from "react";

const AboutMe = () => {
  return (
    <div className="h-[calc(100vh-65px)] flex justify-center items-center">
      <div className="hero ">
        <div className="hero-content  flex-col lg:flex-row gap-9">
          <img
            src="/src/assets/about_me.png"
            class="h-[400px] max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{"<about me/>"}</h1>
            <p className="py-6">
              Hi, I'm Faisal Hasan Emon, a passionate MERN stack developer
              dedicated to building efficient and scalable web applications. I
              specialize in React, Node.js, Express, and MongoDB, crafting
              seamless user experiences with JavaScript and Tailwind CSS. I have
              worked on various projects, including e-commerce platforms, real
              estate websites, and pet adoption platforms, showcasing my ability
              to develop feature-rich applications. I also freelance on Fiverr,
              helping clients bring their ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
