import Logo from '@/components/ui/logo';
import Link from 'next/link';
import BlockDemoText from './block-demo-text';
import Button from '@/components/ui/button';

const ContentDemo = () => {
  return (
    <div className="absolute inset-0 z-50 text-white text-lg overflow-hidden">
      <div className="h-full py-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full h-full flex flex-col">
          <div className="py-8 flex justify-between items-center">
            <Logo fill="fill-neutral-300" />
            <Button type="white" to="/" label="Перейти на сайт" />
          </div>
          <div className="-mx-10 md:mx-0 py-8 flex justify-end flex-1 items-center">
            <BlockDemoText />
          </div>
          <div className="py-8 flex justify-between items-center">
            <a href="https://t.me/KitisF" target="_blank">
              Матрешку придумала и нарисовала @KitisF
            </a>
            <Link
              href="https://github.com/roodiroot/matryoshka-studio"
              target="_blank"
              className="">
              {'<Source />'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDemo;
