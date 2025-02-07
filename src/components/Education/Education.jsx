const Education = () => {
  return (
    <div className="h-[calc(100vh-65px)] gap-9 w-full flex flex-col justify-center items-center ">
      <div className="w-full">
        <h1 className=" text-5xl font-bold  mb-10 text-left">
          {"<education/>"}
        </h1>
      </div>
      <ul className=" flex justify-center items-center timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-white/10 backdrop-blur-3xl p-5 rounded-[6px]">
            <h3 className="text-leg font-black">
              BSc in Computer Science & Engineering
            </h3>
            <h3 className="text-leg font-bold">
              Uttara University | 2021-Running
            </h3>
            {/* <div className="text-lg font-black">First Macintosh computer</div> */}
            <p>CGPA: 3.7</p>
            <p>2 Times Dean Award Winner</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10  bg-white/10 backdrop-blur-3xl p-5 rounded-[6px]">
            <h3 className="text-leg font-black">
              Higher Secondary School Certificate
            </h3>
            <h3 className="text-leg font-bold">
              Uttara High School And College | 2020
            </h3>
            {/* <div className="text-lg font-black">First Macintosh computer</div> */}
            <p>Board : Dhaka</p>
            <p>GPA: 4.9</p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
