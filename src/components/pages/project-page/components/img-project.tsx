"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImgProjectProps {
  img: string;
}

const ImgProject: React.FC<ImgProjectProps> = ({ img }) => {
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
    <div className='group relative'>
      <Image
        ref={ref}
        alt=''
        width='3648'
        height='3117'
        decoding='async'
        data-nimg='1'
        className='w-full'
        sizes='(min-width: 1216px) 76rem, 100vw'
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
        <Image
          alt=''
          width='3648'
          height='3117'
          decoding='async'
          data-nimg='1'
          className='w-full'
          sizes='(min-width: 1216px) 76rem, 100vw'
          src={img}
        />
      </div>
    </div>
  );
};

export default ImgProject;
