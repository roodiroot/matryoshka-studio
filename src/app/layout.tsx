import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../assets/fonts/CraftworkGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/CraftworkGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/CraftworkGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/CraftworkGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const raleway = Raleway({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Матрёшка",
  description: "Студия веб разработки Матрёшка",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' href='/favicon3.png' type='image/x-icon' />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
