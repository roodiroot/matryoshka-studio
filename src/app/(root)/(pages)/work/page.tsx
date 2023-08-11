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
        head='Проверенные решения реальных проблем.'
      >
        <p>
          Мы верим в эффективность и максимальное использование наших ресурсов,
          чтобы обеспечить наилучшую ценность для наших клиентов. Основной
          способ сделать это — повторно использовать те же пять проектов,
          которые мы разрабатывали в течение последнего десятилетия.
        </p>
      </MainHeaderPage>
      <PortfolioBlock />
      <ReviewsBlock
        autor='Новая компания'
        text='Мы обратились в Матрёшку, потому что нам нравились их прошлые работы. Они доставили что-то удивительно похожее в рекордно короткие сроки.'
      />
      <PartnersBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
