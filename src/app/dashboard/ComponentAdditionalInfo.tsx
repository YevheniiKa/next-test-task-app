import Link from "next/link";
import React from "react";

function ComponentAdditionalInfo() {
  return (
    <Link href="#" className="flex gap-1 items-center">
      {Array.from({ length: 3 }).map((_, index) => (
        <span key={index} className="w-1 h-1 rounded-full bg-text-main-grey" />
      ))}
    </Link>
  );
}

export default ComponentAdditionalInfo;
