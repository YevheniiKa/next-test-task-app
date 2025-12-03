"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavProps = {
  href: string;
};
export function NavLink({ href }: NavProps) {
  const pathname = usePathname();
  const isActive = pathname === `/${href}`;

  return (
    <Link href={`${href}`} className="flex gap-[14px] items-center">
      <Image
        src={isActive ? `/icons/${href}-green.svg` : `/icons/${href}-grey.svg`}
        alt={href}
        width={24}
        height={24}
      />
      <span
        className={`text-[14px] font-normal ${
          isActive ? "text-text-bg-green" : "text-text-main-grey"
        }`}
      >
        {href[0].toUpperCase() + href.slice(1)}
      </span>
    </Link>
  );
}
