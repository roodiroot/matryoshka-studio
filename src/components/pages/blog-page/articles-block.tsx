"use client";

import { useEffect } from "react";

import ClassicContainer from "@/components/classic-container";
import { useBlogStore } from "@/hooks/blog-store";
import Article from "./components/article";

const ArticlesBlock = () => {
  const { testArticles, fetchArticles } = useBlogStore();

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24 lg:space-y-32'>
        {testArticles?.map((i) => (
          <Article
            key={i?.id}
            name={i?.name}
            title={i?.title}
            description={i?.description}
            date={i?.createdAt}
            author={i?.author}
          />
        ))}
      </div>
    </ClassicContainer>
  );
};

export default ArticlesBlock;
