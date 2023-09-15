"use client";

import { motion } from "framer-motion";

import ClassicContainer from "@/components/classic-container";
import Button from "@/components/ui/button";
import { blockUp } from "@/transition-variants";
import { contactsConstante } from "@/constance";

const FeedbackformBlock = () => {
  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={blockUp}
          className='-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12'
        >
          <div className='mx-auto max-w-4xl'>
            <div className='max-w-xl'>
              <h2 className='font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl'>
                Расскажите нам о ваших задачах
              </h2>
              <div className='mt-6 flex'>
                <Button to='/contacts' type='white' label='Сказать привет' />
              </div>
              <div className='mt-10 border-t border-white/10 pt-10'>
                <h3 className='font-display text-base font-semibold text-white'>
                  Наши контакты
                </h3>
                <ul className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                  <li>
                    <address className='text-sm not-italic text-neutral-300'>
                      <strong className='text-white'>Телефоны</strong>
                      <br />
                      <a href={`tel:${contactsConstante.phone.mobile2}`}>
                        {contactsConstante.phone.mobile2change}
                      </a>
                      <br />
                      <a href={`tel:${contactsConstante.phone.mobile1}`}>
                        {contactsConstante.phone.mobile1change}
                      </a>
                    </address>
                  </li>
                  <li>
                    <address className='text-sm not-italic text-neutral-300'>
                      <strong className='text-white'>Email</strong>
                      <br />
                      <a href={`mailto:${contactsConstante.email.main}`}>
                        {contactsConstante.email.main}
                      </a>
                      <br />
                      <a href={`mailto:${contactsConstante.email.career}`}>
                        {contactsConstante.email.career}
                      </a>
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ClassicContainer>
  );
};

export default FeedbackformBlock;
