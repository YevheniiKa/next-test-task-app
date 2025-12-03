import Link from "next/link";
import React from "react";

export default function RightBar() {
  return (
    <aside className="pt-10 pl-6 flex flex-col bg-white h-[100vh] sticky top-0">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#121212] text-[20px] font-medium">My Profile</h3>
        <span className="text-text-bg-green text-[14px] font-normal">
          75% completed of your profile
        </span>
      </div>

      <div className="flex flex-col items-center pt-[37px] flex-1">
        <div className="relative w-25 h-25 flex justify-center items-center">
          <div className="absolute w-25 h-25 rounded-full bg-white flex justify-center items-center">
            <div
              className="w-20 h-20 rounded-full 
            border-2 border-text-main-grey 
            border-t-text-bg-green border-r-text-bg-green border-b-text-bg-green border-l-[#fff] 
            rotate-[25deg]"
            ></div>
          </div>

          <div className="w-16 h-16 rounded-full bg-[#C4C4C4] z-10"></div>
        </div>

        <h3 className="text-[#121212] text-[16px] font-medium pt-4 pb-[10px]">
          User R.
        </h3>
        <span className="relative block text-text-main-grey text-[14px] font-normal after:block after:absolute after:left-[-38px] after:bottom-[-11px] after:w-[256px] after:h-[1px] after:bg-[#000]">
          Developer at White Digital
        </span>

        <Link
          href="/"
          className="flex justify-center items-center h-[35px] w-[272px] bg-button-red rounded-[4px] text-[12px] font-bold text-white mt-auto cursor-pointer mr-5 mb-[26px] shadow-md hover:shadow-[5px_5px_5px_0px_rgba(0,_0,_0,_0.2)] transition-shadow duration-300 ease-in-out"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}
