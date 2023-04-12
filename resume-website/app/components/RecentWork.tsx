import React from "react";
import SeeLive from "../Icons/SeeLive";
import SeeSource from "../Icons/SeeSource";

const RecentWork = () => {
  return (
    <div className="px-6 lg:px-24 lg:mb-20" id="portfolio">
      <div className="lg:flex items-center">
        <h1 className="font-crete text-4xl text-gray-900 pt-32 pb-3">
          My Recent Works
        </h1>
        <div className="h-[1px] lg:h-[2px] lg:w-[70%] bg-gray-500 mt-6 lg:mt-32 lg:ml-6"></div>
      </div>
      {/* pricing Ui img and details */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div>
          <img src="/pricingUi.png" alt="pricing ui" className="mt-20" />
        </div>
        <div className="lg:max-w-md lg:flex flex-col justify-center gap-3">
          <h2 className="font-crete text-3xl text-slate-800 py-3">
            Simple Pricing Ui
          </h2>
          <p className="text-slate-800 font-inter tracking-wider">
            If you&apos;re looking for a way to showcase your products or
            services and convert visitors into paying customers, a simple
            pricing UI can be a powerful tool for your business.
          </p>
          <ul className="flex font-inter font-medium my-3">
            <li className="p-3 border-gray-800 border-[1px] mr-3">NextJs</li>
            <li className="p-3 border-gray-800 border-[1px]">Tailwind CSS</li>
          </ul>
          <div className="flex gap-2 tracking-wider text-lg text-white">
            <a
              href="https://pricing-ui-tailwind-lake.vercel.app/"
              target="_blank"
              className="font-inter font-bold bg-orange-500 p-3 mb-28 flex items-center gap-1"
            >
              See Live
              <SeeLive />
            </a>
            <a
              href="https://github.com/sajid-munawar/NextJs/tree/main/pricing-ui-tailwind"
              target="_blank"
              className="font-inter font-bold bg-orange-500 p-3 mb-28 flex items-center gap-1"
            >
              See Source <SeeSource />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
