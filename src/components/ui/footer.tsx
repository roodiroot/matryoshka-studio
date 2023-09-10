'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import LogoM from './logoM';
import { blockUp } from '@/transition-variants';
import SendEmailBlock from './footer-components/send-email-block';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-2xl lg:max-w-none">
        <motion.div variants={blockUp}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <nav>
              <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                    Работы
                  </div>
                  <ul className="mt-4 text-sm text-neutral-700">
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Семейный Фонд
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Установка Кондиционеров
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Монтаж навесов
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Смотреть все <span aria-hidden={true}>→</span>
                      </Link>
                    </div>
                  </ul>
                </li>
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                    Матрёшка
                  </div>
                  <ul className="mt-4 text-sm text-neutral-700">
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        О компании
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Процесс
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Блог
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Связаться с нами
                      </Link>
                    </div>
                  </ul>
                </li>
                <li>
                  <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                    Социaльные сети
                  </div>
                  <ul className="mt-4 text-sm text-neutral-700">
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Whatsapp
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Вконтакте
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Instagramm
                      </Link>
                    </div>
                    <div className="mt-4">
                      <Link href="/" className="transition hover:text-neutral-950">
                        Telegramm
                      </Link>
                    </div>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="flex lg:justify-end">
              <SendEmailBlock />
            </div>
          </div>
          <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
            <LogoM black className="w-52 sm:w-80 lg:w-[46rem]" />
            <p className="text-sm text-neutral-700">© Matryoshka Inc., 2023</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
