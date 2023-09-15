import { Metadata } from 'next';

import ArticlesBlock from '@/components/pages/blog-page/articles-block';
import FeedbackformBlock from '@/components/pages/home-page/feedbackform-block';
import MainHeaderPage from '@/components/ui/main-header-page';

export const metadata: Metadata = {
  title: 'Полезные статьи компании Матрёшка',
  description:
    'Статьи и информация о разработке веб прилоений и сайтов | Матрёшка студия веб разработки',
};

const Page = () => {
  return (
    <>
      <MainHeaderPage overhead="Блог" head="Последние статьи и новости">
        <p>
          Изучите наши статьи, чтобы понять, как привлечь внимание клиента и&nbsp;эффективно
          развивать свой бизнес в&nbsp;онлайн-пространстве.
        </p>
      </MainHeaderPage>
      <ArticlesBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
