"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import Button from "@/components/ui/button";
import Input from "@/components/pages/contacts-page/components/input";
import Check from "@/components/pages/contacts-page/components/check";

const Form = () => {
  return (
    <motion.form variants={blockUp}>
      <h2 className='font-display text-base font-semibold text-neutral-950'>
        Work inquiries
      </h2>
      <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
        <Input placeholder='Имя' />
        <Input placeholder='Email' type='email' />
        <Input placeholder='Компания' />
        <Input placeholder='Телефон' type='tel' />
        <Input placeholder='Сообщение' />
        <div className='border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl'>
          <fieldset>
            <legend className='text-base/6 text-neutral-500'>Бюджет</legend>
            <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
              <Check text='₽25K – ₽50K' name='budjet' value='2' />
              <Check text='₽50K – ₽100K' name='budjet' value='2' />
              <Check text='₽100K – ₽500K' name='budjet' value='2' />
              <Check text='Более ₽500K' name='budjet' value='2' />
            </div>
          </fieldset>
        </div>
      </div>
      <Button
        to=''
        label='Давайте сделаем проект вместе'
        type='dark'
        className='mt-10'
      />
    </motion.form>
  );
};

export default Form;
