import { Metadata } from 'next';

import FormBlock from '@/components/pages/contacts-page/form-block';
import MainHeaderPage from '@/components/ui/main-header-page';

export const metadata: Metadata = {
  title: 'Контакты студии',
  description: 'Контактная информация студии по веб разработке и дизайну Матрёшка',
};

const Page = () => {
  return (
    <>
      <MainHeaderPage overhead="Контакты" head="Давайте поработаем над вашим делом вместе">
        <p>Нам не терпится услышать от вас.</p>
      </MainHeaderPage>
      <FormBlock />
    </>
  );
};

export default Page;
