"use client";

import { Assignee } from "@/types/Assignee";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ComponentAdditionalInfo from "./ComponentAdditionalInfo";

type TodoProps = {
  title: string;
  status: string;
  description: string;
  assignees: Assignee[];
  dueDate: string;
};

export default function Todo({
  title,
  status,
  description,
  assignees,
  dueDate,
}: TodoProps) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (dueDate) {
      setFormattedDate(
        new Date(dueDate).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
        })
      );
    }
  }, [dueDate]);
  const isCompleted = status === "completed";
  return (
    <div className="rounded-[8px] pt-[18px] pb-6 min-h-54 w-65 pl-4 pr-4 bg-white flex flex-col justify-between">
      <div className="flex pb-[22px] justify-between">
        <h3 className="text-[16px] font-medium text-black">{title}</h3>
        <ComponentAdditionalInfo />
      </div>

      <p className="text-[14px] text-[#12121299] leading-[24px] font-normal">
        {description}
      </p>

      <div className="flex justify-between mt-[26px] items-center">
        <div
          className={`min-w-25 h-7 ${
            isCompleted ? "bg-[#F5F6F8]" : "bg-text-bg-green"
          } flex items-center justify-center rounded-[4px]`}
        >
          <div className="flex gap-1">
            <Image
              src={`${
                isCompleted ? "/icons/clock-grey.svg" : "/icons/clock-white.svg"
              }`}
              alt="Clock"
              width={12}
              height={12}
            />
            <span
              className={`${
                isCompleted ? "text-[#DDDDDD]" : "text-white"
              } text-[12px] font-normal`}
            >
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="flex -space-x-4">
          {assignees?.map((a) => {
            return (
              <Link href={`/${a.id}`} key={a.id}>
                <Image
                  src={a.avatar}
                  alt={a.name}
                  width={32}
                  height={32}
                  className="rounded-full border border-white"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
