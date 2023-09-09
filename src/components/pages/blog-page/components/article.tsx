"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";
import { formateDate } from "@/utils";

interface ArticleProps {
  name: string;
  title: string;
  description: string;
  date: string;
  author: {
    img: string;
    name: string;
    surname: string;
    jobTitle: string;
  };
}

const Article: React.FC<ArticleProps> = ({
  name,
  title,
  description,
  date,
  author,
}) => {
  date = formateDate(date, true);

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
      className=''
    >
      <motion.article variants={blockUp}>
        <div className='pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
          <div className='relative lg:-mx-4 lg:flex lg:justify-end'>
            <div className='pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0'>
              <h2 className='font-display text-2xl font-semibold text-neutral-950 line-clamp-3 lg:line-clamp-1'>
                <Link href={`/blog/${name}`}>{title}</Link>
              </h2>
              <dl className='lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4'>
                <dt className='sr-only'>Опубликовано</dt>
                <dd className='absolute left-0 top-0 text-sm text-neutral-950 lg:static'>
                  <time dateTime='2023-04-06'>{date}.</time>
                </dd>
                <dt className='sr-only'>Автор</dt>
                <dd className='mt-6 flex gap-x-4'>
                  <div className='flex-none overflow-hidden rounded-xl bg-neutral-100'>
                    <Image
                      alt='logo'
                      loading='lazy'
                      width='1800'
                      height='1800'
                      decoding='async'
                      data-nimg='1'
                      className='h-12 w-12 object-cover grayscale'
                      src={process.env.NEXT_PUBLIC_API_URL + author?.img}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className='text-sm text-neutral-950'>
                    <div className='font-semibold'>
                      {author?.name} {author?.surname}
                    </div>
                    <div>{author?.jobTitle}</div>
                  </div>
                </dd>
              </dl>
              <p className='mt-6 max-w-2xl text-base text-neutral-600'>
                {description}
              </p>
              <div className='mt-8'>
                <Button type='dark' to={`/blog/${name}`} label='Читать далее' />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default Article;
