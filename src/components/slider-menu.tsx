"use client";
import { useSliderMenu } from "@/hooks/slider-menu-store";

import LogoM from "@/components/ui/logoM";
import Burger from "@/components/ui/burger";
import Button from "./ui/button";
import LinkMenu from "./link-menu";
import { contactsConstante, socialIcons } from "@/constance";

const SliderMenu = () => {
  const { onClose } = useSliderMenu();
  return (
    <div
      className='bg-neutral-800'
      style={{
        transform: "none",
        transformOrigin: "50% 50% 0px",
      }}
    >
      <div className='bg-neutral-950 pb-16 pt-14'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <LogoM fill='fill-white' />
              <div className='flex items-center gap-x-8'>
                <Button
                  to='/contacts'
                  label='Связаться с нами'
                  type='white'
                  className='hidden sm:block'
                />
                <Button
                  to='/contacts'
                  label='Связь'
                  type='white'
                  className='sm:hidden'
                />
                <Burger onClick={onClose} className='w-6 h-6' x />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className='mt-px font-display text-5xl font-medium tracking-tight text-white'>
        <div className='even:mt-px sm:bg-neutral-950'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <LinkMenu href='/work' label='Наши работы' onClick={onClose} />
                <LinkMenu href='/about' label='О нас' onClick={onClose} />
              </div>
            </div>
          </div>
        </div>
        <div className='even:mt-px sm:bg-neutral-950'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <LinkMenu
                  href='/process'
                  label='Наши процессы'
                  onClick={onClose}
                />
                <LinkMenu href='/blog' label='Блог' onClick={onClose} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16'>
              <div>
                <h2 className='font-display text-base font-semibold text-white'>
                  Контакты для связи
                </h2>
                <ul className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2'>
                  <li>
                    <div className='text-sm not-italic text-neutral-300'>
                      <strong className='text-white'>Телефоны</strong>
                      <br />
                      <a href={`tel:${contactsConstante.phone.mobile2}`}>
                        {contactsConstante.phone.mobile2change}
                      </a>
                      <br />
                      <a href={`tel:${contactsConstante.phone.mobile1}`}>
                        {contactsConstante.phone.mobile1change}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='text-sm not-italic text-neutral-300'>
                      <strong className='text-white'>Почты</strong>
                      <br />
                      <a href={`mailto:${contactsConstante.email.main}`}>
                        {contactsConstante.email.main}
                      </a>
                      <br />
                      <a href={`mailto:${contactsConstante.email.career}`}>
                        {contactsConstante.email.career}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='sm:border-l sm:border-transparent sm:pl-16'>
                <h2 className='font-display text-base font-semibold text-white'>
                  Мы в соцсетях
                </h2>
                <ul className='flex gap-x-10 text-white mt-6'>
                  {socialIcons?.map((i) => (
                    <li key={i?.name}>
                      <a
                        aria-label={i?.name}
                        className='transition hover:text-neutral-200'
                        href={i?.path}
                        target='_blank'
                      >
                        {i?.Icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderMenu;
