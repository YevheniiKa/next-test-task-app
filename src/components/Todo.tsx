"use client";

import { Assignee } from "@/types/Assignee";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type TodoProps = {
  title: string;
  description: string;
  assignees: Assignee[];
  dueDate: string;
};

export const Todo = ({ title, description, assignees, dueDate }: TodoProps) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (dueDate) {
      setFormattedDate(
        new Date(dueDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        })
      );
    }
  }, [dueDate]);

  return (
    <div className="rounded-[8px] pt-[18px] pb-6 min-h-54 w-65 pl-4 pr-4 bg-[#FFFFFF] flex flex-col justify-between">
      <div className="flex pb-[22px] justify-between">
        <h3 className="text-[16px] font-medium text-black">{title}</h3>
        <Link href="#" className="flex gap-1 items-center">
          <span className="w-1 h-1 rounded-full bg-[#AAAAAA]" />
          <span className="w-1 h-1 rounded-full bg-[#AAAAAA]" />
          <span className="w-1 h-1 rounded-full bg-[#AAAAAA]" />
        </Link>
      </div>

      <p className="text-[14px] text-[#12121299] leading-[24px] font-normal">
        {description}
      </p>

      <div className="flex justify-between mt-[26px] items-center">
        <div className="min-w-25 h-7 bg-[#64C882] flex items-center justify-center rounded-[4px]">
          <div className="flex gap-1">
            <Image
              src="/icons/clock-white.svg"
              alt="Clock"
              width={16}
              height={16}
            />
            <span className="text-white text-[12px] font-normal">
              {formattedDate}
            </span>
          </div>
        </div>

        <Link href="#" className="flex -space-x-4">
          {assignees?.map((a) => (
            <Image
              key={a.id}
              src={a.avatar}
              alt={a.name}
              width={32}
              height={32}
              className="rounded-full border border-white"
            />
          ))}
        </Link>
      </div>
    </div>
  );
};
