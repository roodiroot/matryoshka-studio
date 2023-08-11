"use client";
import { motion } from "framer-motion";

import ClassicContainer from "@/components/classic-container";
import Image from "next/image";
import Link from "next/link";
import { blockUp } from "@/transition-variants";

const TechnologyList = () => {
  return (
    <ClassicContainer className='mt-16'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          className='flex'
        >
          <motion.article
            variants={blockUp}
            className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'
          >
            <h3>
              <Link href='/'>
                <span className='absolute inset-0 rounded-3xl'></span>
                <Image
                  loading='lazy'
                  decoding='async'
                  className='h-16 w-16'
                  width={36}
                  height={36}
                  src='https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg'
                  alt='hi'
                />
              </Link>
            </h3>
            <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
              <time className='font-semibold'>2023</time>
              <span className='text-neutral-300'>/</span>
              <span className=''>Тематическое исследование</span>
            </p>
            <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
              Пропустите банк, займите у тех, кому вы доверяете
            </p>
            <p className='mt-4 text-base text-neutral-600'>
              FamilyFund — это краудфандинговая платформа для друзей и
              семьи.Разрешение пользователям брать личные кредиты в своей сети
              без традиционного финансового учреждения.
            </p>
          </motion.article>
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          className='flex'
        >
          <motion.article
            variants={blockUp}
            className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'
          >
            <h3>
              <Link href='/'>
                <span className='absolute inset-0 rounded-3xl'></span>
                <Image
                  loading='lazy'
                  decoding='async'
                  className='h-16 w-16'
                  width={36}
                  height={36}
                  src='https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg'
                  alt='hi'
                />
              </Link>
            </h3>
            <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
              <time className='font-semibold'>2023</time>
              <span className='text-neutral-300'>/</span>
              <span className=''>Тематическое исследование</span>
            </p>
            <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
              Пропустите банк, займите у тех, кому вы доверяете
            </p>
            <p className='mt-4 text-base text-neutral-600'>
              FamilyFund — это краудфандинговая платформа для друзей и
              семьи.Разрешение пользователям брать личные кредиты в своей сети
              без традиционного финансового учреждения.
            </p>
          </motion.article>
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          className='flex'
        >
          <motion.article
            variants={blockUp}
            className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'
          >
            <h3>
              <Link href='/'>
                <span className='absolute inset-0 rounded-3xl'></span>
                <Image
                  loading='lazy'
                  decoding='async'
                  className='h-16 w-16'
                  width={36}
                  height={36}
                  src='https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg'
                  alt='hi'
                />
              </Link>
            </h3>
            <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
              <time className='font-semibold'>2023</time>
              <span className='text-neutral-300'>/</span>
              <span className=''>Тематическое исследование</span>
            </p>
            <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
              Пропустите банк, займите у тех, кому вы доверяете
            </p>
            <p className='mt-4 text-base text-neutral-600'>
              FamilyFund — это краудфандинговая платформа для друзей и
              семьи.Разрешение пользователям брать личные кредиты в своей сети
              без традиционного финансового учреждения.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </ClassicContainer>
  );
};

export default TechnologyList;
