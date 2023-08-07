"use client";
import { useSliderMenu } from "@/hooks/slider-menu-store";

import Logo from "@/components/ui/logo";
import Burger from "@/components/ui/burger";
import Button from "./ui/button";
import LinkMenu from "./link-menu";

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
              <Logo fill='fill-white' />
              <div className='flex items-center gap-x-8'>
                <Button to='/contacts' label='Связаться с нами' type='white' />
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
                <LinkMenu
                  href='/services'
                  label='Наши услуги'
                  onClick={onClose}
                />
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
                  Our offices
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderMenu;
