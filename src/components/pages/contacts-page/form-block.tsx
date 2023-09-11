"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import Form from "./components/form";
import { socialIcons } from "@/constance";

const FormBlock = () => {
  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          className='lg:order-last'
        >
          <Form />
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={blockUp}>
            <h2 className='font-display text-base font-semibold text-neutral-950'>
              Наши координаты
            </h2>
            <p className='mt-6 text-base text-neutral-600'>
              Хотите познакомиться ближе? Всегда рады вас видеть в нашем офисе
              или будем рады пообщаться по телефону или почте.
            </p>
            <ul className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2'>
              <li>
                <address className='text-sm not-italic text-neutral-600'>
                  <strong className='text-neutral-950'>Саранск</strong>
                  <br />
                  1 Carlsberg Gate
                  <br />
                  1260, København, Denmark
                </address>
              </li>
              <li>
                <address className='text-sm not-italic text-neutral-600'>
                  <strong className='text-neutral-950'>Нижний новгород</strong>
                  <br />
                  1 Carlsberg Gate
                  <br />
                  1260, København, Denmark
                </address>
              </li>
            </ul>
            <div className='mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
              <h2 className='font-display text-base font-semibold text-neutral-950'>
                Email
              </h2>
              <dl className='mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2'>
                <div>
                  <dt className='font-semibold text-neutral-950'>Заказ</dt>
                  <dd>
                    <a
                      className='text-neutral-600 hover:text-neutral-950'
                      href='mailto:careers@studioagency.com'
                    >
                      sales@studioagency.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className='font-semibold text-neutral-950'>Карьера</dt>
                  <dd>
                    <a
                      className='text-neutral-600 hover:text-neutral-950'
                      href='mailto:careers@studioagency.com'
                    >
                      careers@studioagency.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className='mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
              <h2 className='font-display text-base font-semibold text-neutral-950'>
                Можете найти нас тут
              </h2>
              <ul className='flex gap-x-10 text-neutral-950 mt-6'>
                {socialIcons?.map((i) => (
                  <li key={i?.name}>
                    <a
                      aria-label={i?.name}
                      className='transition hover:text-neutral-700'
                      href={i?.path}
                      target='_blank'
                    >
                      {i?.Icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ClassicContainer>
  );
};

export default FormBlock;
