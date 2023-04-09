import React from "react";

const RecentWork = () => {
  return (
    <div className="px-6" id="portfolio">
      <h1 className="font-crete text-4xl text-gray-900 pt-32 pb-3">
        My Recent Works
      </h1>
      <div className="h-[1px] bg-gray-500 mt-6"></div>
      {/* pricing Ui img and details */}
      <div>
        <img src="/pricingUi.png" alt="pricing ui" className="mt-20" />
        <h2 className="font-crete text-3xl text-slate-800 py-3">
          Simple Pricing Ui
        </h2>
        <p className="text-slate-800 font-inter tracking-wider">
          If you&apos;re looking for a way to showcase your products or services and
          convert visitors into paying customers, a simple pricing UI can be a
          powerful tool for your business.
        </p>
        <ul className="flex font-inter font-medium my-3">
          <li className="p-3 border-gray-800 border-[1px] mr-3">NextJs</li>
          <li className="p-3 border-gray-800 border-[1px]">Tailwind CSS</li>
        </ul>
        <button className="font-inter font-bold bg-orange-500 p-3 mb-28 tracking-wider text-lg text-white">
          See project
        </button>
      </div>
    </div>
  );
};

export default RecentWork;
