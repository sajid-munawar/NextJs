import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="px-6 bg-gray-900 h-screen w-full bg-aboutmebg bg-no-repeat bg-right-bottom">
        <h1 className="font-crete text-7xl text-orange-500 pt-28">About Me</h1>
        <p className="py-6 font-inter font-medium text-xl text-white">
          Hello I&apos;m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don&apos;t
          hesitate to contact me.
        </p>
        <button className="font-inter font-bold bg-orange-500 p-3 tracking-wider text-lg text-white">
          Get my resume
        </button>
      </div>
      <div className="h-[1px] bg-gray-500"></div>
    </div>
  );
};

export default AboutMe;
