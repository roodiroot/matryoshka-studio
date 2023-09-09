"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ClassicContainer from "@/components/classic-container";
import HeaderPortfolio from "./components/header-portfolio";
import { useWorkStore } from "@/hooks/work-store";
import MediaBlockProject from "./components/media-block-project";
import ArticleTextWrapper from "../article-page/components/article-text-wrapper";
import AllWorking from "./components/all-working";
import FeedbackWorking from "./components/feedback-working";
import AchievedesWorking from "./components/achievedes-working";

const MainProjectBlock = () => {
  const { projectSelect, fetchOneProject, fetchProjects } = useWorkStore();
  const pathname = usePathname();

  useEffect(() => {
    fetchOneProject(pathname.split("/")[2]);
    fetchProjects();
  }, []);

  return (
    <article className='mt-24 sm:mt-32 lg:mt-60'>
      <header>
        <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40 text-center'>
          {projectSelect && (
            <HeaderPortfolio
              overTitle={projectSelect?.teme}
              title={projectSelect?.title}
            >
              {projectSelect?.description}
            </HeaderPortfolio>
          )}
        </ClassicContainer>
        {projectSelect && (
          <MediaBlockProject
            info_arr={projectSelect?.infoProject}
            img={projectSelect?.img}
          />
        )}
      </header>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          {projectSelect && (
            <ArticleTextWrapper article={projectSelect?.article} />
          )}
          <div className='[&>*]:mx-auto [&>*]:max-w-3xl'>
            {projectSelect && (
              <>
                <AllWorking work_list={projectSelect?.stack} />
                <FeedbackWorking feedback={projectSelect?.review} />
                <AchievedesWorking achieved={projectSelect?.achieved} />
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainProjectBlock;
