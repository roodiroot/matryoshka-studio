"use client";

import CommandBlock from "@/components/pages/about-page/command-block";
import CultureBlock from "@/components/pages/about-page/culture-block";
import MainBlock from "@/components/pages/about-page/main-block";
import QuoteBlock from "@/components/pages/about-page/quote-block";
import FeedbackformBlock from "@/components/pages/home-page/feedbackform-block";

const Page = () => {
  return (
    <>
      <MainBlock />
      <CultureBlock />
      <CommandBlock />
      <QuoteBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
