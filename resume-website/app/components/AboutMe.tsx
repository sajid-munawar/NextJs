import React from "react";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="px-6 bg-gray-900 h-screen w-full bg-aboutmebg lg:bg-aboutmebg2 bg-no-repeat bg-right-bottom lg:bg-right">
        <div className="lg:ml-20 lg:max-w-lg lg:tracking-wider">
          <h1 className="font-crete text-6xl lg:text-7xl text-orange-500 pt-28">
            About Me
          </h1>
          <p className="py-6 font-inter font-medium text-xl text-white">
            Hello I&apos;m a software developer! I can help you build a product
            , feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don&apos;t
            hesitate to contact me.
          </p>
          <button className="font-inter font-bold bg-orange-500 p-3 tracking-wider text-lg text-white">
            Get my resume
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500"></div>
    </div>
  );
};

export default AboutMe;
