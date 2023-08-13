import { create } from "zustand";

interface Project {
  name: string;
  teme: string;
  title: string;
  description: string;
  info: { title: string; name: string }[];
  img: string;
  article: string;
  stack: string[];
  feedback: {
    name: string;
    job_title: string;
    img: string;
    text: string;
  };
  achieved: { title: string; description: string }[];
}

interface WorkStoreInterface {
  project: Project;
}

const project = {
  name: "skip the bank",
  teme: "Тематическое исследование",
  title: "Пропустите банк, займите у тех, кому вы доверяете",
  description:
    "FamilyFund — это краудфандинговая платформа для друзей и семьи. Разрешение пользователям брать личные кредиты в своей сети без традиционного финансового учреждения.",
  info: [
    { title: "Клиент", name: "Kondish" },
    { title: "Год", name: "2023" },
    { title: "Услуга", name: "Разработка сайта" },
  ],
  img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=1920&q=90",
  article:
    "#titleOverview#pHaving written one of the most shared posts on medium.com (“How to cash out your Dad’s 401K without him knowing”) FamilyFund approached us looking to build out their own blog.#pThe blog would help drive new traffic to their site and serve as a resource-hub for users already trying to exploit their network for money. Because it was so important that they own their own content, we decided that an on-prem solution would be best.#pWe installed 24 Mac Minis bought from craigslist in the storage cupboard of their office. One machine would be used for the web server and another one for the build server. The other 22 were for redundancy, and to DDOS squarespace.com every few months to keep them on their toes.#pTo optimise their search traffic we used an innovativen technique. Every post has a shadow post only visible to web crawlers that is some variation of “Gary Vee is looking to invest in new founders”. Like bees to honey.",
  stack: [
    "Внешний интерфейс (Next.js)",
    "Пользовательская CMS",
    "SEO",
    "Инфраструктура",
  ],
  feedback: {
    name: "Дебра Фискал",
    job_title: "генеральный директор FamilyFund",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdebra-fiscal.c5e84807.jpeg&w=384&q=75",
    text: "Работая со Студией, мы чувствовали себя скорее партнером, чем заказчиком. Они действительно нашли отклик в нашей миссии изменить то, как люди убеждают своих родителей обналичить свои пенсии.",
  },
  achieved: [
    { title: "25%", description: "Меньше трафика" },
    { title: "10x", description: "Время загрузки страницы" },
    { title: "15%", description: "Более высокие затраты на инфраструктуру" },
    { title: "1,2 миллиона долларов", description: "Юридические услуги" },
  ],
};

export const useWorkStore = create<WorkStoreInterface>((set) => ({
  project: project,
}));

// #title - Заголовок
// #p - Параграф
// #i-img*** - Картика
