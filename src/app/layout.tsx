import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

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
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
