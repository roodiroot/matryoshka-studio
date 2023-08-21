const TextDemoBlock = () => {
  return (
    <div className='relative w-full h-full'>
      <svg
        aria-hidden='true'
        className='absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]'
      >
        <rect
          width='100%'
          height='100%'
          fill='url(#:r6:)'
          strokeWidth='0'
        ></rect>
        <svg x='50%' y='-256' strokeWidth='0' className='overflow-visible'>
          <path
            transform='translate(64 160)'
            d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
          ></path>
          <path
            transform='translate(128 320)'
            d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
          ></path>
          <path
            transform='translate(288 480)'
            d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
          ></path>
          <path
            transform='translate(512 320)'
            d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
          ></path>
          <path
            transform='translate(544 640)'
            d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
          ></path>
          <path
            transform='translate(320 800)'
            d='M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z'
          ></path>
        </svg>
        <defs>
          <pattern
            id=':r6:'
            width='96'
            height='480'
            x='50%'
            patternUnits='userSpaceOnUse'
            patternTransform='translate(0 -256)'
            fill='none'
          >
            <path d='M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128'></path>
          </pattern>
        </defs>
      </svg>
      <div className='w-full h-full flex justify-center items-center pt-24 pl-32 pr-40'>
        <figure className='mx-auto max-w-4xl'>
          <blockquote className='relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
            <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
              Наши строки кода, как мотивы русских народных песен. Виртуозно
              воплощают в жизнь Ваши идеи.
            </p>
          </blockquote>
          <figcaption className='mt-10 text-neutral-950'>
            <span>Компания </span>{" "}
            <span className='font-bold'>© Матрёшка, 2023</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default TextDemoBlock;
