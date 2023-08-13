"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ImgProject from "./img-project";
import InfoProject from "./info-project";
import GrayScaleImgWrapper from "@/components/gray-scale-img-wrapper";

interface MediaBlockProjectProps {
  info_arr: { title: string; name: string }[];
  img: string;
}

const MediaBlockProject: React.FC<MediaBlockProjectProps> = ({
  info_arr,
  img,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={blockUp}
        className='mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='mx-auto max-w-5xl'>
              <InfoProject info_arr={info_arr} />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={blockUp}
        className='border-y border-neutral-200 bg-neutral-100'
      >
        <div className='-my-px mx-auto max-w-[76rem] bg-neutral-200'>
          <ImgProject img={img} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MediaBlockProject;
