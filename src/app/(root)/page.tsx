'use client';

import FeedbackformBlock from '@/components/pages/home-page/feedbackform-block';
import MainBlock from '@/components/pages/home-page/main-block';
import ReviewsBlock from '@/components/pages/home-page/reviews-block';
import ServiceBlock from '@/components/pages/home-page/service-block';
import ServicesBlock from '@/components/pages/home-page/services-block';
import TechnologyList from '@/components/pages/home-page/technology-list';
import TehnologyBlock from '@/components/pages/home-page/tehnology-block';

export default function Home() {
  return (
    <>
      <MainBlock />
      <ServicesBlock />
      <TehnologyBlock />
      <TechnologyList />
      <ReviewsBlock
        autor="Литеечка ©"
        text="Творческий подход и&nbsp;профессионализм Матрёшки, привели к&nbsp;созданию сайта, который прекрасно сочетает в&nbsp;себе функциональность и&nbsp;эстетическую привлекательность."
      />
      <ServiceBlock />
      <FeedbackformBlock />
    </>
  );
}
