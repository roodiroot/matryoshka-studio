import { useEffect, useRef, useState } from "react";

interface GrayScaleImgWrapperProps {
  children: React.ReactNode;
  img: any;
  v?: number;
}

const GrayScaleImgWrapper: React.FC<GrayScaleImgWrapperProps> = ({
  children,
  img,
  v = 600,
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
  return <div></div>;
};

export default GrayScaleImgWrapper;
