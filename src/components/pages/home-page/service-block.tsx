"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import Image from "next/image";
import img from "@/assets/img/main-no-color.jpg";

const ServiceBlock = () => {
  return (
    <>
      <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          className='max-w-2xl'
        >
          <motion.h2 variants={blockUp}>
            <span className='mb-6 block font-display text-base font-semibold text-neutral-950'>
              Services
            </span>
            <span className='sr-only'> - </span>
            <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950'>
              We help you identify, and respond new opportunities.
            </span>
          </motion.h2>
          <motion.div
            variants={blockUp}
            className='mt-6 text-xl text-neutral-600'
          >
            <p>
              As long as those opportunities involve giving us money to
              re-purpose old projects — we can come up with an endless number of
              those.
            </p>
          </motion.div>
        </motion.div>
      </ClassicContainer>
      <ClassicContainer className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
            className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'
          >
            <motion.div
              variants={blockUp}
              className='w-[33.75rem] flex-none lg:w-[45rem]'
            >
              <div className='justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale'>
                <svg viewBox='0 0 655 680' fill='none' className='h-full'>
                  <g clipPath='url(#:S1:-clip)' className='group'>
                    <g className='origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105'>
                      <foreignObject width='655' height='680'>
                        <Image
                          alt=''
                          loading='lazy'
                          width='1000'
                          height='1200'
                          decoding='async'
                          data-nimg='1'
                          className='w-full bg-neutral-400 object-cover'
                          style={{
                            color: "transparent",
                            aspectRatio: "655 / 680",
                          }}
                          sizes='(min-width: 1024px) 41rem, 31rem'
                          src={img}
                        />
                      </foreignObject>
                    </g>
                    <use
                      href='#:S1:-shape'
                      stroke-width='2'
                      className='stroke-neutral-950/10'
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=':S1:-clip'>
                      <path
                        id=':S1:-shape'
                        d='M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <ul className='text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
              <motion.li
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                className='group mt-10 first:mt-0'
              >
                <motion.div variants={blockUp}>
                  <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                    <strong className='font-semibold text-neutral-950'>
                      Web development.{" "}
                    </strong>
                    We specialise in crafting beautiful, high quality marketing
                    pages. The rest of the website will be a shell that uses
                    lorem ipsum everywhere.
                  </div>
                </motion.div>
              </motion.li>
              <motion.li
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                className='group mt-10 first:mt-0'
              >
                <motion.div variants={blockUp}>
                  <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                    <strong className='font-semibold text-neutral-950'>
                      Web development.{" "}
                    </strong>
                    We specialise in crafting beautiful, high quality marketing
                    pages. The rest of the website will be a shell that uses
                    lorem ipsum everywhere.
                  </div>
                </motion.div>
              </motion.li>
              <motion.li
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                className='group mt-10 first:mt-0'
              >
                <motion.div variants={blockUp}>
                  <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                    <strong className='font-semibold text-neutral-950'>
                      Web development.{" "}
                    </strong>
                    We specialise in crafting beautiful, high quality marketing
                    pages. The rest of the website will be a shell that uses
                    lorem ipsum everywhere.
                  </div>
                </motion.div>
              </motion.li>
              <motion.li
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                className='group mt-10 first:mt-0'
              >
                <motion.div variants={blockUp}>
                  <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                    <strong className='font-semibold text-neutral-950'>
                      Web development.{" "}
                    </strong>
                    We specialise in crafting beautiful, high quality marketing
                    pages. The rest of the website will be a shell that uses
                    lorem ipsum everywhere.
                  </div>
                </motion.div>
              </motion.li>
            </ul>
          </div>
        </div>
      </ClassicContainer>
    </>
  );
};

export default ServiceBlock;
