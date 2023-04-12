import React from "react";
import GitHubB from "../Icons/GitHubB";
import LinkedInB from "../Icons/LinkedInB";
import AngleB from "../Icons/AngleB";
import TwitterB from "../Icons/TwitterB";
import MediumB from "../Icons/MediumB";
import Shape from "../Icons/Shape";

const SocialIcons = () => {
  return (
    <div>
      <div className="h-[1px] bg-gray-500 mt-20 lg:hidden"></div>
      <div className="flex justify-center mt-3 mb-5 lg:mb-0 lg:py-10 lg:gap-3">
        <a href="https://github.com/sajid-munawar" target="_blank">
          <GitHubB />
        </a>
        <a href="https://www.linkedin.com/in/sajid-munawar" target="_blank">
          <LinkedInB />
        </a>
        <a href="https://wellfound.com/u/sajid-munawar-1" target="_blank">
          <AngleB />
        </a>
        <a href="https://twitter.com/SajidMunawarDev" target="_blank">
          <TwitterB />
        </a>
        <a href="https://medium.com/@iamsajiddev" target="_blank">
          <MediumB />
        </a>
      </div>
      <div className="flex justify-center py-5 lg:hidden ">
        <Shape />
      </div>
    </div>
  );
};

export default SocialIcons;
