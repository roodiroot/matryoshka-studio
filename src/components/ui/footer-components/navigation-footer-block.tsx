"use client";

import Link from "next/link";

import BlockMenuFooter from "@/components/ui/footer-components/block-menu-footer";
import { pathes, socialIcons, works } from "@/constance";

const NavigationFooterBlock = () => {
  return (
    <nav>
      <ul className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
        <BlockMenuFooter title='Работы' links={works}>
          <div className='mt-4'>
            <Link href='/work' className='transition hover:text-neutral-950'>
              Смотреть все <span aria-hidden={true}>→</span>
            </Link>
          </div>
        </BlockMenuFooter>
        <BlockMenuFooter title='Матрёшка' links={pathes} />
        <BlockMenuFooter title='Социaльные сети' links={socialIcons} blank />
      </ul>
    </nav>
  );
};

export default NavigationFooterBlock;
