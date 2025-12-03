"use client";

import React from "react";
import { Categories } from "@/types/Categories";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const AsideBar = () => {
  return (
    <aside className="pt-[55px] pl-7 flex flex-col bg-white h-[100vh] sticky top-0">
      <div>
        <Link href={`/`} className="flex items-center gap-3">
          <span className="w-8 h-8 bg-[#FF9F24] rounded-4xl flex justify-center items-center text-white text-[18px] font-medium">
            C
          </span>
          <h1 className="uppercase text-[#121212] text-[20px] font-semibold">
            Test app
          </h1>
        </Link>

        <nav>
          <ul className="pt-[20px]">
            {Categories.map((category) => (
              <li key={category} className="pt-[20px]">
                <NavLink href={category}></NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Link href="/" className="mt-auto pb-[37px] flex gap-3">
        <div className="bg-[#C4C4C4] rounded-4xl w-8 h-8"></div>
        <div className="flex flex-col justify-between">
          <span className="block text-black text-[12px] font-medium">
            User R.
          </span>
          <span className="block text-text-main-grey text-[10px] font-normal">
            test-mail@email.com
          </span>
        </div>
      </Link>
    </aside>
  );
};
