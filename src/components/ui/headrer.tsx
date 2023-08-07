"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { useSliderMenu } from "@/hooks/slider-menu-store";
import SliderMenu from "@/components/slider-menu";
import Logo from "@/components/ui/logo";
import Burger from "@/components/ui/burger";
import Button from "./button";

const Headrer = () => {
  const { isOpen, onOpen } = useSliderMenu();
  return (
    <header>
      <div
        className='absolute left-0 right-0 top-2 z-40 pt-14'
        aria-hidden='true'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <Logo black fill='fill-neutral-950' />
              <div className='flex items-center gap-x-8'>
                <Button to='/contacts' label='Связаться с нами' type='dark' />
                <Burger onClick={onOpen} className='w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='relative z-50 overflow-hidden bg-neutral-950 pt-2'
        style={{
          height: "auto",
          transform: "none",
          transformOrigin: "50% 50% 0px",
        }}
      >
        <Transition appear show={isOpen} as={Fragment}>
          <Menu>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 h-px'
              enterTo='opacity-100 h-[812px] sm:h-[750px]  lg:h-[666px]'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 h-[812px] sm:h-[750px] lg:h-[666px]'
              leaveTo='opacity-0  h-px'
            >
              <Menu.Items>
                <SliderMenu />
              </Menu.Items>
            </Transition.Child>
          </Menu>
        </Transition>
      </div>
    </header>
  );
};

export default Headrer;
