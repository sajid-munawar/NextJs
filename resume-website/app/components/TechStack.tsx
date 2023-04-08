import React from "react";
import LanguageRectangle from "../Icons/LanguageRectangle";

const TechStack = () => {
  return (
    <div className="flex justify-center text-white bg-gray-900">
      {/* languages */}
      <div>
        <div className="flex items-center">
          <LanguageRectangle />
          <h1 className="font-roboto text-4xl ml-3">Languages</h1>
        </div>
        <div className="flex flex-col items-center gap-8 font-inter text-2xl">
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>Python</div>
          <div>HTML</div>
          <div>CSS</div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
