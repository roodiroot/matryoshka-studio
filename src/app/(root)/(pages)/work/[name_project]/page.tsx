"use client";
import FeedbackformBlock from "@/components/pages/home-page/feedbackform-block";
import MoreProjects from "@/components/pages/project-page/components/more-projects";
import MainProjectBlock from "@/components/pages/project-page/main-project-block";

const Page = () => {
  return (
    <>
      <MainProjectBlock />
      <MoreProjects />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
