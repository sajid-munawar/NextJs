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
      <div className="h-[1px] bg-gray-500 mt-20"></div>
      <div className="flex justify-center mt-3 mb-5">
        <GitHubB />
        <LinkedInB />
        <AngleB />
        <TwitterB />
        <MediumB />
      </div>
      <div className="flex justify-center py-5">
        <Shape />
      </div>
    </div>
  );
};

export default SocialIcons;
