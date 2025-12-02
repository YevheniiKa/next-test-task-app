"use client";

import Image from "next/image";
import React from "react";
import Categories from "@/types/Categories";

export const AsideBar = () => {
  return (
    <aside className="pt-[55px] pl-7 flex flex-col bg-white ">
      <div>
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-[#FF9F24] rounded-4xl flex justify-center items-center text-white text-[18px] font-medium">
            C
          </span>
          <h1 className="uppercase text-[#121212] text-[20px] font-semibold">
            Test app
          </h1>
        </div>

        <nav>
          <ul className="pt-[20px]">
            {Categories.map((category) => (
              <li key={category} className="pt-[20px]">
                <a href="#" className="flex gap-[14px] items-center">
                  <Image
                    src={`/icons/${category}-grey.svg`}
                    alt={category}
                    width={24}
                    height={24}
                  />
                  <span className="text-[#AAAAAA] text-[14px] font-normal">
                    {category[0].toUpperCase() + category.slice(1)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href="#" className="mt-auto pb-[37px] flex gap-3">
        <div className="bg-[#C4C4C4] rounded-4xl w-8 h-8"></div>
        <div className="flex flex-col justify-between">
          <span className="block text-black text-[12px] font-medium">
            User R.
          </span>
          <span className="block text-[#AAAAAA] text-[10px] font-normal">
            test-mail@email.com
          </span>
        </div>
      </a>
    </aside>
  );
};
