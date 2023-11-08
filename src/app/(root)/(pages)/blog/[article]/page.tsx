import { Metadata } from 'next';

import FullArticleBlock from '@/components/pages/article-page/article-full-block';
import MoreArticles from '@/components/pages/article-page/more-articles-block';
import FeedbackformBlock from '@/components/pages/home-page/feedbackform-block';
import { fetchArticleByName } from '@/http/blogAPI';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    // read route params
    const name = params.article;
    // fetch data
    const product = await fetchArticleByName(name);
    if (!product)
      return {
        title: 'Not Found',
        description: 'The page not are looking for does not exist.',
      };
    return {
      title: product.title,
      description: product.description,
      robots: {
        index: false,
        follow: true,
        nocache: true,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'Not Found',
      description: 'The page not are looking for does not exist.',
    };
  }
}

const Page = () => {
  return (
    <>
      <FullArticleBlock />
      <MoreArticles />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
