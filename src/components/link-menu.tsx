"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LinkMenuProps {
  href: string;
  label: string;
  onClick: () => void;
}

const LinkMenu: React.FC<LinkMenuProps> = ({ href, label, onClick }) => {
  const router = useRouter();
  const click = () => {
    onClick();
    setTimeout(() => {
      router.push(href);
    }, 300);
  };
  return (
    <div
      onClick={click}
      className='group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 cursor-pointer'
    >
      {label}
      <span className='absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100'></span>
    </div>
  );
};

export default LinkMenu;
