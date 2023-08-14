"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import Image from "next/image";

interface PartnersItemProps {
  logo: string;
}
const PartnersItem: React.FC<PartnersItemProps> = ({ logo }) => {
  return (
    <li className='group'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.2 }}
        className='overflow-hidden'
      >
        <motion.div
          variants={blockUp}
          className='pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'
        >
          <Image
            alt='фобия'
            loading='lazy'
            width='184'
            height='36'
            decoding='async'
            data-nimg='1'
            style={{ color: "transparent" }}
            src={logo}
          />
        </motion.div>
      </motion.div>
    </li>
  );
};

export default PartnersItem;
