import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { GoMarkGithub } from "react-icons/go";
import { FaMedium } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/sajid-munawar" target="-blank">
        <div className="fixed top-[40vh] flex items-center gap-4 text-3xl bg-gray-400 p-2 -ml-[135px] rounded-r-lg hover:ml-0 duration-500">
          LinkedIn
          <RiLinkedinFill className="h-10 w-10" />
        </div>
      </a>
      <a href="https://github.com/sajid-munawar" target="-blank">
        <div className="fixed top-[50vh] flex items-center gap-4 text-3xl bg-gray-400 p-2 -ml-28 rounded-r-lg hover:ml-0 duration-500">
          Github
          <GoMarkGithub className="h-10 w-10" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/sajid-munawar" target="-blank">
        <div className="fixed top-[60vh] flex items-center gap-4 text-3xl bg-gray-400 p-2 -ml-[130px]  rounded-r-lg hover:ml-0 duration-500">
          Medium
          <FaMedium className="h-10 w-10" />
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
