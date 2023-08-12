import { create } from "zustand";

interface Article {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  autor: { img: string; name: string; jobTitle: string };
}

interface BlogStoreInterface {
  articles: Article[];
}

const articles: Article[] = [
  {
    id: 1,
    name: "future-web",
    title: "Будущее веб-разработки: наши прогнозы на 2023 год",
    description:
      "Давайте рассмотрим последние тенденции в веб-разработке и повторим некоторые прогнозы, которые мы прочитали в Твиттере, о том, как они будут формировать отрасль в наступающем году.",
    date: "6 апреля 2023 г",
    autor: {
      img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpeg&w=1920&q=75",
      name: "Челси Хэгон",
      jobTitle: "Ведущий разработчик",
    },
  },
  {
    id: 2,
    name: "three-lesson",
    title: "3 урока, которые мы усвоили, вернувшись в офис",
    description:
      "Давайте рассмотрим последние тенденции в веб-разработке и повторим некоторые прогнозы, которые мы прочитали в Твиттере, о том, как они будут формировать отрасль в наступающем году.",
    date: "18 февраля 2023 г",
    autor: {
      img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fangela-fisher.f2122cd4.jpeg&w=1920&q=75",
      name: "Анджела Фишер",
      jobTitle: "Соучредитель / генеральный директор",
    },
  },
  {
    id: 3,
    name: "short-guide",
    title: "Краткое руководство по именованию компонентов",
    description:
      "Давайте рассмотрим последние тенденции в веб-разработке и повторим некоторые прогнозы, которые мы прочитали в Твиттере, о том, как они будут формировать отрасль в наступающем году.",
    date: "1 декабря 2022 г",
    autor: {
      img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
      name: "Анджела Фишер",
      jobTitle: "Front-end разработчик",
    },
  },
];

export const useBlogStore = create<BlogStoreInterface>((set) => ({
  articles: articles,
}));
