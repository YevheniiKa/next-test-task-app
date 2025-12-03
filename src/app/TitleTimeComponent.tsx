import React from "react";

export default function TitleTimeComponent() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  const dayName = days[date.getDay()];
  const formatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="flex flex-col">
      <h2 className="text-[#121212] text-[20px] font-medium">My Tasks</h2>
      <span className="text-[14px] font-normal text-text-bg-green">
        {dayName},{" "}
        <span className="text-[14px] font-normal text-text-main-grey">
          {formatted}
        </span>
      </span>
    </div>
  );
}
