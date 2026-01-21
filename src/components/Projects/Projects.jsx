import React, { useState } from "react";

const Projects = () => {
  const [readeMore, setReadMore] = useState(<></>);
  const handleReadMore = (more) => {
    setReadMore(more);
    document.getElementById("my_modal_4").showModal();
  };
  return (
    <div className="min-h-[calc(100vh-65px)] flex justify-center items-center flex-col gap-9 ">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold  mb-10 text-left">
          {"<projects/>"}
        </h1>
      </div>
      <div className="w-full space-y-7">
        {/* Card-1 */}
        <div className="card w-full card-md  shadow-base-200 shadow-lg backdrop-blur-2xl bg-white/2">
          <div className="card-body">
            <div className="w-full mx-auto rounded-lg overflow-clip border">
              <iframe
                src="https://lingolink-8b4ec.web.app/"
                frameborder="0"
                className="w-full h-[500px] object-cover overflow-y-scroll bg-white"
              ></iframe>
            </div>
            <div className="mt-5">
              <div className="space-y-2">
                <h3 className="textarea-xl font-bold">About</h3>
                <p className="text-justify">
                  This project is an Online Tutor Booking Platform, designed to
                  connect users with tutors across various languages and
                  subjects. It simplifies the process of finding, reviewing, and
                  booking tutors through an interactive and user-friendly
                  interface. The platform is essential for promoting accessible
                  learning opportunities globally and streamlining the tutor
                  hiring process. Users can browse categories, view detailed
                  tutor profiles, and book sessions securely. Features like
                  adding tutorials, managing bookings, and reviewing tutors
                  enhance user engagement.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap justify-center md:justify-start items-center gap-1 md:gap-5 w-full">
                <button
                  className="btn"
                  onClick={() =>
                    handleReadMore(
                      <>
                        <h3 className="textarea-xl font-bold">
                          Project Description
                        </h3>
                        <p>
                          This project is an Online Tutor Booking Platform,
                          designed to connect users with tutors across various
                          languages and subjects. It simplifies the process of
                          finding, reviewing, and booking tutors through an
                          interactive and user-friendly interface. The platform
                          is essential for promoting accessible learning
                          opportunities globally and streamlining the tutor
                          hiring process. Users can browse categories, view
                          detailed tutor profiles, and book sessions securely.
                          Features like adding tutorials, managing bookings, and
                          reviewing tutors enhance user engagement.
                        </p>
                        <h3 className="textarea-xl font-bold mt-2">
                          Key Features
                        </h3>

                        <ul className="list-disc pl-10">
                          <li>
                            User Authentication Using Google And User Email and
                            Password
                          </li>
                          <li>Add Tutorials</li>
                          <li>Update Tutorials</li>
                          <li>Delete Tutorials</li>
                          <li>Search Tutorials By Languages</li>
                          <li>Browse Tutorials According to Category</li>
                          <li>Give Reviews</li>
                          <li>Switch Light And Dark Mode Switching</li>
                          <li>Pagination</li>
                        </ul>
                        <h3 className="textarea-xl font-bold mt-2 ">
                          NPM Packages
                        </h3>
                        <ul className="list-disc pl-10">
                          <li>AOS</li>
                          <li>Toaster</li>
                          <li>Sweet Alert 2</li>
                          <li>Marque</li>
                        </ul>
                      </>
                    )
                  }
                >
                  Read More
                </button>
                <button className="btn">
                  <a href="https://lingolink-8b4ec.web.app/" target="_blank">
                    Live Link
                  </a>
                </button>
                <button className="btn">
                  <a
                    href="https://github.com/FaisalHasanEmon/LingoLink"
                    target="_blank"
                  >
                    GitHub Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card-2 */}
        <div className="card w-full card-md  shadow-base-200 shadow-lg backdrop-blur-2xl bg-white/2">
          <div className="card-body">
            <div className="w-full mx-auto rounded-lg overflow-clip border">
              <iframe
                src="https://pathfinder-cdd41.web.app/"
                frameborder="0"
                className="w-full h-[500px] object-cover overflow-y-scroll bg-white"
              ></iframe>
            </div>
            <div className="mt-5">
              <div className="space-y-2">
                <h3 className="textarea-xl font-bold">About</h3>
                <p className="text-justify">
                  This project is built with: PathFinder is a career counseling
                  website designed to guide users on their career paths. The
                  goal is to create a seamless, intuitive platform that offers
                  personalized career advice, guidance, and resources to users
                  seeking to make informed decisions about their professional
                  futures.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap justify-center md:justify-start items-center gap-1 md:gap-5 w-full">
                <button
                  className="btn"
                  onClick={() =>
                    handleReadMore(
                      <>
                        <h3 className="textarea-xl font-bold">
                          About PathFinder
                        </h3>
                        <p>
                          This project is built with: PathFinder is a career
                          counseling website designed to guide users on their
                          career paths. The goal is to create a seamless,
                          intuitive platform that offers personalized career
                          advice, guidance, and resources to users seeking to
                          make informed decisions about their professional
                          futures.
                        </p>
                        <h3 className="textarea-xl font-bold mt-2">
                          Building Blocks of PathFinder:
                        </h3>

                        <ul className="list-disc pl-10">
                          <li>
                            User Authentication Using Google And User Email and
                            Password
                          </li>
                          <li>React</li>
                          <li>React Router</li>
                          <li>
                            Firebase for handling routing, user authentication,
                            and data management
                          </li>
                        </ul>
                        <h3 className="textarea-xl font-bold mt-2 ">
                          NPM Packages
                        </h3>
                        <ul className="list-disc pl-10">
                          <li>Swiper Slider</li>
                          <li>Aos Animation</li>
                          <li>React Helmet</li>
                          <li>React Fast Marquee</li>
                          <li>React Toastify</li>
                        </ul>
                        <h3 className="textarea-xl font-bold mt-2 ">
                          Key features of user verification
                        </h3>
                        <ul className="list-disc pl-10">
                          <li>Password verification</li>
                          <li>Forget password option</li>
                          <li>Update password option</li>
                          <li>update image and name</li>
                        </ul>
                      </>
                    )
                  }
                >
                  Read More
                </button>
                <button className="btn">
                  <a href="https://pathfinder-cdd41.web.app/" target="_blank">
                    Live Link
                  </a>
                </button>
                <button className="btn">
                  <a
                    href="https://github.com/FaisalHasanEmon/PathFinder"
                    target="_blank"
                  >
                    GitHub Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card-3 */}
        <div className="card w-full card-md  shadow-base-200 shadow-lg backdrop-blur-2xl bg-white/2">
          <div className="card-body">
            <div className="w-full mx-auto rounded-lg overflow-clip border">
              <iframe
                src="https://gadget-heaven-ph.netlify.app/"
                frameborder="0"
                className="w-full h-[500px] object-cover overflow-y-scroll bg-white"
              ></iframe>
            </div>
            <div className="mt-5">
              <div className="space-y-2">
                <h3 className="textarea-xl font-bold">About</h3>
                <p className="text-justify">
                  Gadget Heaven is an authentic online e-commerce website for
                  various electronic devices and gadgets like: laptop, phone,
                  speakers, earphones, earbuds etc.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap justify-center md:justify-start items-center gap-1 md:gap-5 w-full">
                <button
                  className="btn"
                  onClick={() =>
                    handleReadMore(
                      <>
                        <h3 className="textarea-xl font-bold">
                          Project Description
                        </h3>
                        <p>
                          Gadget Heaven is an authentic online e-commerce
                          website for various electronic devices and gadgets
                          like: laptop, phone, speakers, earphones, earbuds etc.
                        </p>
                        <h3 className="textarea-xl font-bold mt-2 ">
                          Technology Used
                        </h3>
                        <ul className="list-disc pl-10">
                          <li>REACT</li>
                          <li>API</li>
                          <li>Tailwind</li>
                          <li>DaisyUI</li>
                          <li>React toasters</li>
                          <li>React Router</li>
                        </ul>
                        <h3 className="textarea-xl font-bold mt-2">
                          Key Features
                        </h3>
                        <ul className="list-disc pl-10">
                          <li>User select gadgets</li>
                          <li>Buy gadgets</li>
                        </ul>
                      </>
                    )
                  }
                >
                  Read More
                </button>
                <button className="btn">
                  <a
                    href="https://gadget-heaven-ph.netlify.app/"
                    target="_blank"
                  >
                    Live Link
                  </a>
                </button>
                <button className="btn">
                  <a
                    href="https://github.com/FaisalHasanEmon/Gadget-Heaven"
                    target="_blank"
                  >
                    GitHub Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <div>{readeMore}</div>
              <div className="w-full flex justify-end items-center">
                <button className="btn mt-5">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
