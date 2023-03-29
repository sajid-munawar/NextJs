import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-4xl flex mt-10">
      {/* Left side starts here */}
      <div className="mx-8 max-w-lg self-center w-3/4  ">
        <h1 className="text-white text-4xl">I am a Front End Developer</h1>
        <p className="text-justify mt-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          provident, explicabo aspernatur repellendus magnam pariatur
          perferendis aut voluptatem natus et? Dicta enim nostrum illum ad ipsam
          officia obcaecati culpa veritatis cum facere, quis, perspiciatis
          magnam quae quia sapiente iure, rerum vitae tempora sit eligendi
          aliquid recusandae vero natus? Aut, cum.
        </p>
      </div>
      {/* Left side ends here */}
      {/* Right side starts here */}
      <div>
        <img
          src="https://resume-template-gamma.vercel.app/images/car3.webp"
          alt="dev"
        />
      </div>
    </div>
  );
};

export default Hero;
