"use client";

import { motion, useScroll, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PhotoElementProps {
  img?: string;
  className?: string;
}

const PhotoElement: React.FC<PhotoElementProps> = ({
  img = "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmagnifying-glass.5cedfad8.jpg&w=750&q=75",
  className = "",
}) => {
  const [b, setB] = useState(1);
  const ref = useRef(null);

  const skrolGrayScale = () => {
    const element: any = ref?.current;
    const h = window.innerHeight;
    const imageTop = element?.getBoundingClientRect().y;
    const imageCenter = element?.getBoundingClientRect().height / 2;
    const removal = imageTop + imageCenter - h / 2;
    const v = 600;

    setB(Math.abs(removal / v));
  };

  useEffect(() => {
    window.addEventListener("scroll", skrolGrayScale);
    return () => {
      window.removeEventListener("scroll", skrolGrayScale);
    };
  }, []);

  return (
    <div
      className={`group isolate overflow-hidden rounded-4xl bg-neutral-100 ${className}`}
    >
      <div ref={ref} className='group relative'>
        <Image
          alt=''
          loading='lazy'
          width='2400'
          height='3520'
          decoding='async'
          data-nimg='1'
          className='aspect-[16/10] w-full object-cover'
          sizes='(min-width: 768px) 42rem, 100vw'
          src={img}
          style={{
            color: "transparent",
            filter: `grayscale(${b})`,
          }}
        />
        <div
          className='pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100'
          aria-hidden='true'
        >
          <img
            alt=''
            loading='lazy'
            width='2400'
            height='1600'
            decoding='async'
            data-nimg='1'
            className='aspect-[16/10] w-full object-cover'
            sizes='(min-width: 768px) 42rem, 100vw'
            src={img}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoElement;
