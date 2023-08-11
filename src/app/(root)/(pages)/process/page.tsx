"use client";

import FeedbackformBlock from "@/components/pages/home-page/feedbackform-block";
import FeatureBlock from "@/components/pages/process-page/feature-block";
import ProcessBlock from "@/components/pages/process-page/process-block";
import MainHeaderPage from "@/components/ui/main-header-page";

const Page = () => {
  return (
    <>
      <MainHeaderPage overhead='Работа над проектом' head='Как мы работаем'>
        <p>
          Мы верим в эффективность и максимальное использование наших ресурсов,
          чтобы обеспечить наилучшую ценность для наших клиентов. Основной
          способ сделать это — повторно использовать те же пять проектов,
          которые мы разрабатывали в течение последнего десятилетия.
        </p>
      </MainHeaderPage>
      <ProcessBlock />
      <FeatureBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
