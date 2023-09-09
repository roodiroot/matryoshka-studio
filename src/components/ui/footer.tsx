"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import LogoM from "./logoM";
import { blockUp } from "@/transition-variants";

const Footer = () => {
  return (
    <footer className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.2 }}
        className='mx-auto max-w-2xl lg:max-w-none'
      >
        <motion.div variants={blockUp}>
          <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
            <nav>
              <ul className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
                <li>
                  <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                    Работы
                  </div>
                  <ul className='mt-4 text-sm text-neutral-700'>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Семейный Фонд
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Установка Кондиционеров
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Монтаж навесов
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Смотреть все <span aria-hidden={true}>→</span>
                      </Link>
                    </div>
                  </ul>
                </li>
                <li>
                  <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                    Матрёшка
                  </div>
                  <ul className='mt-4 text-sm text-neutral-700'>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        О компании
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Процесс
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Блог
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Связаться с нами
                      </Link>
                    </div>
                  </ul>
                </li>
                <li>
                  <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                    Социaльные сети
                  </div>
                  <ul className='mt-4 text-sm text-neutral-700'>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Whatsapp
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Вконтакте
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Instagramm
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <Link
                        href='/'
                        className='transition hover:text-neutral-950'
                      >
                        Telegramm
                      </Link>
                    </div>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className='flex lg:justify-end'>
              <div className='max-w-sm'>
                <h2 className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
                  Обратная связь
                </h2>
                <p className='mt-4 text-sm text-neutral-700'>
                  Подпишитесь, чтобы получать последние новости дизайна, статьи,
                  ресурсы и вдохновение.
                </p>
                <div className='relative mt-6'>
                  <input
                    type='email'
                    className='block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5'
                    placeholder='Адрес электронной почты'
                  />
                  <div className='absolute inset-y-1 right-1 flex justify-end'>
                    <button className='flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12'>
            <LogoM black className='w-52 sm:w-80 lg:w-[46rem]' />
            <p className='text-sm text-neutral-700'>© Matryoshka Inc., 2023</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
