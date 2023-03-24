import Image from "next/image";
import React from "react";
import Tickmark from "../Assets/Tickmark";

export default function Card() {
  return (
    <div className="flex justify-center pt-20 text-black -mt-48">
      {/* left Box */}
      <div className="bg-gray-200 p-12 rounded-l-lg shadow-lg">
        <div className="font-bold text-2xl">Premium PRO</div>
        <span className="font-bold text-6xl pt-4">$329</span>
        <p>billed just once</p>
        <button
          type="submit"
          className="bg-violet-500 text-white font-medium py-3 px-16 rounded-md mt-6"
        >
          Get Started
        </button>
      </div>
      {/* right Box */}
      <div className="bg-white rounded-r-lg p-12 shadow-lg">
        <p>
          Access these features when you get this pricing package for your
          business.
        </p>
        <ul>
          <li>
            <Tickmark />
            <p>International calling and messaging API</p>
          </li>
          <li>
            <Tickmark />
            <p>Additional phone numbers</p>
          </li>
          <li>
            <Tickmark />
            <p>Automated messages via Zapier</p>
          </li>
          <li>
            <Image src={"/tick.png"} alt="tick" width={22} height={22} />
            <p>24/7 support and consulting</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
