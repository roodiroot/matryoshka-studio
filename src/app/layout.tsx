import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: '../assets/fonts/CraftworkGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://matryoshka-studio.ru'),
  title: {
    template: '%s | Матрёшка студия веб разрабтки',
    default: 'Матрёшка студия веб разрабтки', // a default is required when creating a template
  },
  description:
    'Заказать создание, разработку, дизайн сайтов | Цифровые решения для бизнеса по всей России | Комплексное продвижение сайтов: Seo оптимизация, контекстная и таргетированная реклама | Результативный подход и профессиональное сопровождение',
  icons: {
    icon: '/fav_120.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
            ym(94961323, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
         });
              `,
          }}
        />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
