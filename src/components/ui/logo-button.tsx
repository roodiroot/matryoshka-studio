"use client";

import Link from "next/link";

import { Icons } from "./icons";
import { cn } from "@/libs/utils";

interface LogoButtonsProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
const LogoButtons: React.FC<LogoButtonsProps> = ({ className, ...props }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex gap-2 justify-start items-center w-[130px] h-auto sm:w-[150px]",
        className
      )}
      {...props}
    >
      <Icons.logo className="w-full h-full fill-white" />
    </Link>
  );
};
export default LogoButtons;
