"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import SvgBorderPhoto from "@/components/ui/svg-border-photo";

interface ContainerProcwssBlockProps {
  info: any;
}

const ContainerProcwssBlock: React.FC<ContainerProcwssBlockProps> = ({
  info,
}) => {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
          <div className='flex justify-center'>
            <motion.div
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.2 }}
              className='w-[33.75rem] flex-none lg:w-[45rem]'
            >
              <motion.div
                variants={blockUp}
                className='justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale'
              >
                <SvgBorderPhoto variant={info.id} img={info.img} />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.2 }}
            className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'
          >
            <motion.div variants={blockUp}>
              <div className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"></div>
              <h2 className='mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
                {info?.stap}
              </h2>
              <div className='mt-6'>
                <div className='space-y-6 text-base text-neutral-600'>
                  {info?.text}
                </div>
                {info?.info}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContainerProcwssBlock;
