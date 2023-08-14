"use client";

import FeedbackformBlock from "@/components/pages/home-page/feedbackform-block";
import ReviewsBlock from "@/components/pages/home-page/reviews-block";
import PartnersBlock from "@/components/pages/work/partners-block";
import PortfolioBlock from "@/components/pages/work/portfolio-block";
import MainHeaderPage from "@/components/ui/main-header-page";

const Page = () => {
  return (
    <>
      <MainHeaderPage
        overhead='Наши работы'
        head='Окно в Мир Ваших возможностей'
      >
        <p>
          Мы&nbsp;черпаем вдохновение в&nbsp;богатом культурном наследии,
          объединяя традиции и&nbsp;инновации, чтобы создать веб-решения,
          которые говорят сами за&nbsp;себя.
        </p>
      </MainHeaderPage>
      <PortfolioBlock />
      <ReviewsBlock
        autor='© Health & beauty, 2020'
        text='Они не просто создают сайты — они дарят уникальные веб-решения, воплощая в них глубину культуры и профессионализм.'
      />
      <PartnersBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
