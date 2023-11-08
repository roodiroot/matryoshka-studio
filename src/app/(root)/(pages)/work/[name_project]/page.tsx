import FeedbackformBlock from '@/components/pages/home-page/feedbackform-block';
import MoreProjects from '@/components/pages/project-page/components/more-projects';
import MainProjectBlock from '@/components/pages/project-page/main-project-block';
import { fetchOneProjectByNameAPI } from '@/http/projectsAPI';
import { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    // read route params
    const name = params.name_project;

    // fetch data
    const product = await fetchOneProjectByNameAPI(name);
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
      <MainProjectBlock />
      <MoreProjects />
      <FeedbackformBlock />
    </>
  );
};

export default Page;
