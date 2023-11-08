import { Metadata } from 'next';

import FeedbackformBlock from '@/components/pages/home-page/feedbackform-block';
import FeatureBlock from '@/components/pages/process-page/feature-block';
import ProcessBlock from '@/components/pages/process-page/process-block';
import MainHeaderPage from '@/components/ui/main-header-page';

export const metadata: Metadata = {
  title: 'Культура и ценности нашей компании',
  description:
    'Культура и ценности студии Матрёшка | Работа с клиентами | Матрёшка студия веб разработки',
};

const Page = () => {
  return (
    <>
      <MainHeaderPage overhead="Наши Процессы" head="Искусство Встречает Технологию">
        <p>
          В&nbsp;студии веб-дизайна &laquo;Матрёшка&raquo; мы&nbsp;верим, что каждый
          проект&nbsp;&mdash; это путешествие, полное открытий и&nbsp;возможностей.
        </p>
      </MainHeaderPage>
      <ProcessBlock />
      <FeatureBlock />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
