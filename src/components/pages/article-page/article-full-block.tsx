"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ClassicContainer from "@/components/classic-container";
import ArticleHead from "./components/article-head";
import { useBlogStore } from "@/hooks/blog-store";
import ArticleTextWrapper from "./components/article-text-wrapper";

const FullArticleBlock = () => {
  const { articleSelect, fetchOneArticle, fetchArticles } = useBlogStore();
  const pathname = usePathname();

  useEffect(() => {
    fetchOneArticle(pathname.split("/")[2]);
    fetchArticles();
  }, []);
  return (
    <ClassicContainer teg='article' className='mt-24 sm:mt-32 lg:mt-60'>
      {articleSelect && (
        <ArticleHead
          title={articleSelect?.title}
          date={articleSelect?.createdAt}
          autor={articleSelect?.author}
        />
      )}
      {articleSelect && <ArticleTextWrapper article={articleSelect?.text} />}
    </ClassicContainer>
  );
};

export default FullArticleBlock;
