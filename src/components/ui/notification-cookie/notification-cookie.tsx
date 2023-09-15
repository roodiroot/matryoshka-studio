"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";

const NotificationCookie = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!Cookies.get("privacy_cookies")) {
      return setShow(true);
    }
    Cookies.set("privacy_cookies", "ok", { expires: 7 });
  }, []);
  const okCookie = () => {
    Cookies.set("privacy_cookies", "ok", { expires: 7 });
    setShow(false);
  };
  return (
    <>
      {show && (
        <div
          onClick={okCookie}
          className='fixed bottom-0 inset-x-0 md:bottom-4 md:inset-x-4 bg-rose-600 z-[51] md:rounded-4xl shadow-2xl'
        >
          <div className='w-full px-4 md:px-16 py-4 flex justify-between gap-8 items-center'>
            <span className='text-white font-semibold text-xs sm:text-sm md:text-lg'>
              Везде на&nbsp;нашем сайте мы&nbsp;используем фаилы cookie, без них
              просто ни&nbsp;чего&nbsp;бы не&nbsp;работало.
            </span>
            <Button type='white' label='Принимаю' onClick={okCookie} />
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCookie;
