import React from "react";
import LanguageRectangle from "../Icons/LanguageRectangle";
import FrameworksRectangle from "../Icons/FrameworksRectangle";
import SkillsRectangle from "../Icons/SkillsRectangle";

const TechStack = () => {
  return (
    <div className="flex  flex-col items-center text-white bg-gray-900 py-20">
      {/* languages */}
      <div>
        <div className="flex items-center">
          <LanguageRectangle />
          <h1 className="font-roboto text-4xl ml-3">Languages</h1>
        </div>
        <div className="flex flex-col items-center gap-8 font-inter text-2xl my-10">
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>Python</div>
          <div>HTML</div>
          <div>CSS</div>
        </div>
      </div>
       {/* Frameworks */}
       <div>
        <div className="flex items-center">
          <FrameworksRectangle />
          <h1 className="font-roboto text-4xl ml-3">Frameworks</h1>
        </div>
        <div className="flex flex-col items-center gap-8 font-inter text-2xl my-10">
          <div>React.js</div>
          <div>Next.js</div>
        </div>
      </div>
       {/* Skills */}
       <div>
        <div className="flex items-center justify-center">
          <SkillsRectangle />
          <h1 className="font-roboto text-4xl ml-3">Skills</h1>
        </div>
        <div className="flex flex-col items-center gap-8 font-inter text-2xl my-10">
          <div>Version Control</div>
          <div>API Design</div>
          <div>CLI</div>
          <div>Web Development</div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
