'use client';

import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface PhotoElementProps {
  className?: string;
}

const PhotoElement: React.FC<PhotoElementProps> = ({ className = '' }) => {
  const ref = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ['end end', 'start start'],
  //   });

  const isInView = useInView(ref, { once: true });

  return (
    <div className={`group isolate overflow-hidden rounded-4xl bg-neutral-100 ${className}`}>
      <div ref={ref} className="group relative">
        <Image
          style={{
            filter: isInView ? 'grayscale(0)' : 'grayscale(1)',
            transition: 'all 5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          alt=""
          loading="lazy"
          width="2400"
          height="3520"
          decoding="async"
          data-nimg="1"
          className="aspect-[16/10] w-full object-cover"
          sizes="(min-width: 768px) 42rem, 100vw"
          src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmagnifying-glass.5cedfad8.jpg&w=750&q=75"
        />
      </div>
    </div>
  );
};

export default PhotoElement;
