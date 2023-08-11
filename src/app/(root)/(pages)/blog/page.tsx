"use client";

import ArticlesBlock from "@/components/pages/blog-page/articles-block";
import FeedbackformBlock from "@/components/pages/home-page/feedbackform-block";
import MainHeaderPage from "@/components/ui/main-header-page";

const Page = () => {
  return (
    <>
      <MainHeaderPage overhead='Блог' head='Последние статьи и новости'>
        <p>
          Будьте в курсе последних отраслевых новостей, поскольку наши
          маркетинговые команды находят новые способы переделать старые статьи с
          хитростями CSS.
        </p>
      </MainHeaderPage>
      <ArticlesBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
