"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import PartnersItem from "./ui/partners-item";

const partnersList = [
  {
    id: 1,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.353d4760.svg",
  },
  {
    id: 2,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.ad8a4f58.svg",
  },
  {
    id: 3,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.1ff7dc9b.svg",
  },
  {
    id: 4,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.645d638e.svg",
  },
  {
    id: 5,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.e87ae13a.svg",
  },
  {
    id: 6,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.ac5d2e8d.svg",
  },
  {
    id: 7,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.4785dd63.svg",
  },
  {
    id: 8,
    logo: "https://studio.tailwindui.com/_next/static/media/logo-dark.7370ef3f.svg",
  },
];

const PartnersBlock = () => {
  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={blockUp}
          className='font-display text-2xl font-semibold text-neutral-950'
        >
          наши партнеры
        </motion.h2>
      </motion.div>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.2 }}
        className='mt-10'
      >
        <motion.div
          variants={blockUp}
          className='relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'
        ></motion.div>
        <ul className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4'>
          {partnersList?.map((i) => (
            <PartnersItem key={i.id} logo={i.logo} />
          ))}
        </ul>
      </motion.div>
    </ClassicContainer>
  );
};

export default PartnersBlock;
