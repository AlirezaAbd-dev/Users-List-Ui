"use client";

import Image from "next/image";

export default function Card() {
  return (
    <div className="flex w-full p-5 border-2 border-white hover:border-2 hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-300/20 rounded-xl">
      {/* Avatar */}
      <div className="flex items-start">
        <Image
          src="https://avatars.githubusercontent.com/u/98334060?v=4"
          className="w-20 rounded-full mb-10"
          alt="Avatar"
          width={100}
          height={100}
        />
      </div>
      {/* details */}
      <div className="flex flex-col items-start pt-2 px-4">
        <h3 className=" font-bold text-lg">Alireza Abedi</h3>
        <p>Guilan, Rasht</p>
        <div className="flex flex-wrap text-xs h-auto text-indigo-400 mt-">
          <p className="px-2 pb-[2px] m-0.5 border-2 rounded-2xl border-indigo-300">
            Headset
          </p>
          <p className="px-2 pb-[2px] m-0.5 border-2 rounded-2xl border-indigo-300">
            Mobile
          </p>
          <p className="px-2 pb-[2px] m-0.5 border-2 rounded-2xl border-indigo-300">
            Laptop
          </p>
        </div>
      </div>
    </div>
  );
}
