"use client";

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { blockUp } from "@/transition-variants";
import Button from "@/components/ui/button";
import Input from "@/components/pages/contacts-page/components/input";
import Check from "@/components/pages/contacts-page/components/check";
import { useState } from "react";

export type IFormValues = {
  name: string;
  email: string;
  company: string;
  phone: number | null;
  message: string;
  budget: string;
};

const Form = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: null,
      message: "",
      budget: "",
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    setDisabled(true);
    let string = [];
    for (let block in data) {
      if (data[block]) {
        string.push(`<b>${block}:</b> <i>${String(data[block])}</i>`);
      }
    }
    const dataString = string.join().replace(/,/g, "%0A");
    const text = `<b>Форма обратной связи:</b>%0A%0A${dataString}`;
    await fetch(`/api/order?text=${text}`)
      .then((data) => {
        if (data.status === 200) {
          return toast.success("Супер!!! Ожидайте звонка!!!");
        }
        toast.error("Ошибка попробуйте ещё раз!");
      })
      .catch(() => {
        toast.error("Ошибка попробуйте ещё раз!");
      })
      .finally(() => {
        reset();
        setDisabled(false);
      });
  };

  return (
    <motion.div variants={blockUp}>
      <h2 className='font-display text-base font-semibold text-neutral-950'>
        Нужен сайт?
      </h2>
      <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
        <Input
          placeholder='Имя'
          label='name'
          register={register}
          required
          error={errors.name}
        />
        <Input
          placeholder='Email'
          type='email'
          label='email'
          register={register}
          required
          error={errors.email}
        />
        <Input
          placeholder='Компания'
          label='company'
          register={register}
          required={false}
        />
        <Input
          placeholder='Телефон'
          type='tel'
          label='phone'
          register={register}
          required
          error={errors.phone}
        />
        <Input
          placeholder='Сообщение'
          label='message'
          register={register}
          required={false}
        />
        <div className='border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl'>
          <fieldset>
            <legend className='text-base/6 text-neutral-500'>Бюджет</legend>
            <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
              <Check
                label='budget'
                register={register}
                text='₽25K – ₽50K'
                value='₽25K – ₽50K'
              />
              <Check
                label='budget'
                register={register}
                text='₽50K – ₽100K'
                value='₽50K – ₽100K'
              />
              <Check
                label='budget'
                register={register}
                text='₽100K – ₽500K'
                value='₽100K – ₽500K'
              />
              <Check
                label='budget'
                register={register}
                text='Более ₽500K'
                value='Более ₽500K'
              />
            </div>
          </fieldset>
        </div>
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        label='Давайте сделаем проект вместе'
        type='dark'
        className='mt-10'
        disabled={disabled}
      />
    </motion.div>
  );
};

export default Form;
