"use client";

import FormBlock from "@/components/pages/contacts-page/form-block";
import MainHeaderPage from "@/components/ui/main-header-page";

const Page = () => {
  return (
    <>
      <MainHeaderPage
        overhead='Контакты'
        head='Давайте поработаем над вашим делом вместе'
      >
        <p>Нам не терпится услышать от вас.</p>
      </MainHeaderPage>
      <FormBlock />
    </>
  );
};

export default Page;
