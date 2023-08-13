"use client";

import ClassicContainer from "@/components/classic-container";
import ArticleHead from "./components/article-head";
import { useBlogStore } from "@/hooks/blog-store";
import ArticleTextWrapper from "./components/article-text-wrapper";

const FullArticleBlock = () => {
  const { article } = useBlogStore();
  return (
    <ClassicContainer teg='article' className='mt-24 sm:mt-32 lg:mt-40'>
      <ArticleHead />
      <ArticleTextWrapper article={article} />
    </ClassicContainer>
  );
};

export default FullArticleBlock;
