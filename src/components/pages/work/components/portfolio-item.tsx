"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { blockUp } from "@/transition-variants";
import Button from "@/components/ui/button";

interface PortfolioItemProps {
  name: string;
  year: any;
  teme: string;
  title: string;
  description: string;
  company: string;
  review: {
    author: { name: string; surname: string; jobTitle: string; img: string };
    text: string;
  };
  stack: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  year,
  teme,
  title,
  description,
  stack,
  review,
  company,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.article variants={blockUp}>
        <div className='grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
          <div className='col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block'>
            <div className='sm:flex sm:items-center sm:gap-x-6 lg:block'>
              <Image
                alt='s'
                loading='lazy'
                width='36'
                height='36'
                decoding='async'
                data-nimg='1'
                className='h-16 w-16 flex-none'
                style={{ color: "transparent" }}
                src='https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg'
              />
              <h3 className='mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8'>
                {company}
              </h3>
            </div>
            <div className='mt-1 flex gap-x-4 sm:mt-0 lg:block'>
              <p className="line-clamp-1 text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                {stack?.slice(0, 4).map((i) => (
                  <span key={i}>{i}, </span>
                ))}
              </p>
              <p className='text-sm text-neutral-950 lg:mt-2'>
                <time dateTime='2023-01'>{year}</time>
              </p>
            </div>
          </div>
          <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
            <p className='font-display text-4xl font-medium text-neutral-950'>
              <Link href={`work/${name}`}>{title}</Link>
            </p>
            <div className='mt-6 space-y-6 text-base text-neutral-600'>
              <p>
                {teme}
                <span>. </span>
                {description}
              </p>
              <p>
                Стек технологий:{" "}
                {stack?.slice(0, 4).map((i) => (
                  <span key={i}>{i}, </span>
                ))}
              </p>
            </div>
            <div className='mt-8 flex'>
              <Button label='Смотреть кейс' type='dark' to={`work/${name}`} />
            </div>
            <div className='pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'>
              <figure className='text-sm'>
                <blockquote className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
                  <p>{review?.text}</p>
                </blockquote>
                <figcaption className='mt-6 font-semibold text-neutral-950'>
                  {review?.author?.name} {review?.author?.surname},{" "}
                  {review?.author?.jobTitle}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default PortfolioItem;
