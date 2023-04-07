import React from "react";
import GithubWhite from "../Icons/GithubWhite";
import LinkedInWhite from "../Icons/LinkedInWhite";
import AnglelistWhite from "../Icons/AnglelistWhite";
import Twitter from "../Icons/Twitter";
import Medium from "../Icons/Medium";

const Hero = () => {
  return (
    <>
      <div className="px-6 bg-gray-900 h-screen w-full bg-herobg bg-no-repeat bg-right-bottom">
        <h1 className="text-5xl pt-32 max-w-xs font-crete text-orange-500">
          Hey There. <br /> I&prime;m Sajid.
        </h1>
        <h2 className="font-roboto font-bold text-2xl text-white py-3">
          I&prime;m a Software Developer
        </h2>
        <p className="text-white font-poppins ">
          I can help you build a product &sbquo; feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don&prime;t hesitate to contact me.
        </p>
        <div className="flex pt-3">
          <GithubWhite />
          <LinkedInWhite />
          <AnglelistWhite />
          <Twitter />
          <Medium />
        </div>

      </div>
    </>
  );
};

export default Hero;
