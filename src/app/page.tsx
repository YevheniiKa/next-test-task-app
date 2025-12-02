"use client";

import React from "react";
import { TaskBoard } from "@/components/TaskBoard";
import { AsideBar } from "@/components/AsideBar";

export default function Home() {
  return (
    <div className="grid grid-cols-[240px_1fr]">
      <AsideBar />
      <main className="bg-[#f7f9fd] pl-8 pt-10">
        <div className="flex flex-col">
          <h2 className="text-[#121212] text-[20px] font-medium">My Tasks</h2>
          <span className="text-[14px] font-normal text-[#64C882]">
            Thursday,{" "}
            <span className="text-[14px] font-normal text-[#AAAAAA]">
              29 May 2025
            </span>
          </span>
        </div>

        <TaskBoard />
      </main>
    </div>
  );
}
