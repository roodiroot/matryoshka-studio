"use client";

import ClassicContainer from "@/components/classic-container";
import { useBlogStore } from "@/hooks/blog-store";
import Article from "./components/article";

const ArticlesBlock = () => {
  const { articles } = useBlogStore();
  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24 lg:space-y-32'>
        {articles.map((i) => (
          <Article
            key={i.id}
            title={i.title}
            description={i.description}
            date={i.date}
            autor={i.autor}
          />
        ))}
      </div>
    </ClassicContainer>
  );
};

export default ArticlesBlock;
