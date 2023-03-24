import React from "react";
import MoneyBack from "../Assets/moneyBack";
import NoMonthlyFee from "../Assets/noMonthlyFee";
import NosetupFee from "../Assets/noSetupFee";

const ExtraFeatures = () => {
  return (
    <div>
      <ul className="flex justify-center gap-8 my-14">
        <li>
          <MoneyBack />
          <span className="properties">30 days money back Guarantee</span>
        </li>
        <li>
          <NosetupFee />
          <span className="properties">No setup fees 100% hassle-free</span>
        </li>
        <li>
          <NoMonthlyFee />
          <span className="properties">No monthly subscription Pay once and for all</span>
        </li>
      </ul>
    </div>
  );
};

export default ExtraFeatures;
