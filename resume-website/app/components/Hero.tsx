import React from "react";
import GithubWhite from "../Icons/GithubWhite";
import LinkedInWhite from "../Icons/LinkedInWhite";
import AnglelistWhite from "../Icons/AnglelistWhite";
import Twitter from "../Icons/Twitter";
import Medium from "../Icons/Medium";

const Hero = () => {
  return (
    <>
      <div className="px-6 lg:pt-12 bg-gray-900 h-screen w-full bg-herobg lg:bg-desktophero bg-no-repeat bg-right-bottom lg:bg-right-top lg:bg-contain">
        {/* div for desktop styles */}
        <div className="lg:flex flex-row-reverse items-center justify-end">
          {/* div for text content */}
          <div className="max-w-lg lg:tracking-wider">
            <h1 className="text-5xl lg:text-7xl pt-32 font-crete text-orange-500">
              Hey There. <br /> I&prime;m Sajid.
            </h1>
            <h2 className="font-roboto font-bold text-2xl lg:text-3xl text-white py-3">
              I&prime;m a Software Developer
            </h2>
            <p className="text-white font-poppins ">
              I can help you build a product &sbquo; feature or website Look
              through some of my work and experience! If you like what you see
              and have a project you need coded, don&prime;t hesitate to contact
              me.
            </p>
          </div>
          {/* div for social icons */}
          <div className="flex pt-3 lg:flex-col lg:mt-32 lg:pr-6">
            <a href="https://github.com/sajid-munawar" target="_blank">
              <GithubWhite />
            </a>
            <a href="https://www.linkedin.com/in/sajid-munawar" target="_blank">
              <LinkedInWhite />
            </a>
            <a href="https://wellfound.com/u/sajid-munawar-1" target="_blank">
              <AnglelistWhite />
            </a>
            <a href="https://twitter.com/SajidMunawarDev" target="_blank">
              <Twitter />
            </a>
            <a href="https://medium.com/@iamsajiddev" target="_blank">
              <Medium />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
