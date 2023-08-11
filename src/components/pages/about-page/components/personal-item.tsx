"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { blockUp } from "@/transition-variants";

interface PersonalItemProps {
  img: any;
  name: string;
  jobTitle: string;
}
const PersonalItem: React.FC<PersonalItemProps> = ({ img, name, jobTitle }) => {
  return (
    <motion.li
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={blockUp}>
        <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
          <Image
            src={img}
            alt=''
            loading='lazy'
            width='1800'
            height='1800'
            decoding='async'
            data-nimg='1'
            className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'
            style={{ color: "color:transparent" }}
          />
          <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
            <p className='font-display text-base/6 font-semibold tracking-wide text-white'>
              {name}
            </p>
            <p className='mt-2 text-sm text-white'>{jobTitle}</p>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};

export default PersonalItem;
