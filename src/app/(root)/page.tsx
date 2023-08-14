"use client";

import FeedbackformBlock from "@/components/pages/home-page/feedbackform-block";
import MainBlock from "@/components/pages/home-page/main-block";
import ProjectListForHomePage from "@/components/pages/home-page/project-list-for-home-page";
import ReviewsBlock from "@/components/pages/home-page/reviews-block";
import ServiceBlock from "@/components/pages/home-page/service-block";
import ServicesBlock from "@/components/pages/home-page/services-block";
import TehnologyBlock from "@/components/pages/home-page/tehnology-block";

export default function Home() {
  return (
    <>
      <MainBlock />
      <ServicesBlock />
      <TehnologyBlock />
      <ProjectListForHomePage />
      <ReviewsBlock
        autor='© Литеечка, 2023'
        text='Творческий подход и&nbsp;профессионализм Матрёшки, привели к&nbsp;созданию сайта, который прекрасно сочетает в&nbsp;себе функциональность и&nbsp;эстетическую привлекательность.'
      />
      <ServiceBlock />
      <FeedbackformBlock />
    </>
  );
}
