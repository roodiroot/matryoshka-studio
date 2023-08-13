"use client";

import ClassicContainer from "@/components/classic-container";
import HeaderPortfolio from "./components/header-portfolio";
import { useWorkStore } from "@/hooks/work-store";
import MediaBlockProject from "./components/media-block-project";
import ArticleTextWrapper from "../article-page/components/article-text-wrapper";
import AllWorking from "./components/all-working";
import FeedbackWorking from "./components/feedback-working";
import AchievedesWorking from "./components/achievedes-working";

const MainProjectBlock = () => {
  const { project } = useWorkStore();

  return (
    <article className='mt-24 sm:mt-32 lg:mt-40'>
      <header>
        <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40 text-center'>
          <HeaderPortfolio overTitle={project?.teme} title={project?.title}>
            {project?.description}
          </HeaderPortfolio>
        </ClassicContainer>
        <MediaBlockProject info_arr={project?.info} img={project?.img} />
      </header>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <ArticleTextWrapper article={project?.article} />
          <div className='[&>*]:mx-auto [&>*]:max-w-3xl'>
            <AllWorking work_list={project?.stack} />
            <FeedbackWorking feedback={project?.feedback} />
            <AchievedesWorking achieved={project?.achieved} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainProjectBlock;
