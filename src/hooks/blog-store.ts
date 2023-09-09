import { create } from "zustand";

import { fetchArticleByName, fetchArticlesApi } from "@/http/blogAPI";
import { Article } from "@/types";

interface BlogStoreInterface {
  testArticles: Article[] | null;
  articleSelect: Article | undefined;
  fetchArticles: () => Promise<void>;
  fetchOneArticle: (name: string) => Promise<void>;
}

export const useBlogStore = create<BlogStoreInterface>((set) => ({
  testArticles: [],
  articleSelect: undefined,
  fetchArticles: async () => {
    const data = await fetchArticlesApi();
    set({ testArticles: data });
  },
  fetchOneArticle: async (name: string) => {
    const data = await fetchArticleByName(name);
    set({ articleSelect: data });
  },
}));

// #title - Заголовок
// #p - Параграф
// #i-img*** - Картика

// const website_building_article =
//   "#titleИскусство Создания Сайта#pДрузья, позвольте поделиться с вами истинной сутью того, что стоит за созданием сайта. Это не просто набор технических навыков или программирование; это искусство, это ремесло, это диалог между вами и нами.#pКаждая встреча с вами начинается не с бизнеса, а с понимания. Я хочу знать вашу миссию, вашу страсть и ваши цели. Ваш сайт — это ваше лицо в виртуальном мире, и нам важно передать его правильно.#titleО Проектировании и Мечтах#pСоздание прототипа — это словно живопись наброском будущей картины. Мы вместе видим то, что еще не существует, и шаг за шагом приближаемся к реализации вашей мечты.#i-img456#pДизайн сайта для меня — это музыка, где каждый элемент играет свою партию. Как дирижер, я управляю оркестром талантливых дизайнеров и разработчиков, чтобы создать гармонию визуальных и функциональных элементов.#titleО Качестве и Внимании#pКаждый сайт — это шедевр, требующий тонкой отделки. Мы тестируем, оптимизируем, шлифуем каждый уголок, чтобы удовлетворить вашу потребность в совершенстве.#pНаши отношения с вами не заканчиваются запуском сайта. Они продолжаются в постоянном взаимодействии, поддержке и сотрудничестве. Вы — не просто клиент, вы — наш партнер.#titleЗаключение#pСоздание сайта — это путешествие, в котором мы хотим быть вашим верным спутником. Ваш сайт заслуживает не меньше, чем исключительный дизайн, внимание к деталям и искреннюю заботу. Именно это я обещаю вам как директор и как человек, который верит в силу совместного творчества.#i-img456";

// const web_disign_article =
//   "#titleЭффективный Дизайн Сайта: Как Привлечь и Удержать Внимание Посетителей#pЭффективный дизайн сайта — это не просто красивые картинки и стильные шрифты. Это искусство передачи информации таким образом, чтобы посетители не только нашли то, что искали, но и остались на вашем сайте, возможно, даже став клиентами.#pСложный и запутанный дизайн может отпугнуть посетителя. Ваш сайт должен быть интуитивным и удобным для навигации. Четкая структура, выразительные заголовки и понятные кнопки навигации сделают процесс поиска информации приятным и быстрым.#i-img456#pСогласованность в дизайне создает профессиональное и надежное впечатление. Используйте одинаковые шрифты, цвета и изображения на всех страницах, чтобы создать единый стиль.#titleМобильная Оптимизация#pС каждым днем все больше людей используют мобильные устройства для доступа к интернету. Адаптивный дизайн, который выглядит хорошо и работает без сбоев на всех устройствах, является необходимостью.#pКачественные изображения и видео могут сделать ваш сайт более привлекательным и динамичным. Однако важно не переборщить, чтобы страница не стала перегруженной и тяжелой для загрузки.#titleСкорость Загрузки#pЕсли ваш сайт загружается слишком долго, посетители могут уйти еще до того, как увидят его. Оптимизируйте изображения, используйте кеширование и обратите внимание на другие факторы, которые могут замедлить загрузку.#i-img456#titleВызывающие к Действию Элементы (CTA)#pЧеткие и заметные кнопки или ссылки, призывающие к действию, могут значительно увеличить конверсию на вашем сайте. Будьте ясны в том, что вы хотите, чтобы посетитель сделал дальше.#pЭффективный дизайн сайта требует тщательного планирования и внимания к деталям. Он должен не только привлекать внимание, но и удерживать посетителя, предоставляя ему приятный и продуктивный опыт. В конечном итоге, хороший дизайн может превратить случайного посетителя в удовлетворенного клиента. Ваш сайт — это лицо вашей компании в интернете, поэтому вложите время и ресурсы в его качественное оформление.";

// const reation_studio =
//   '#title#pВ мире, где технологии развиваются с бешеной скоростью, история студии Матрёшка — это история о верности двум основным принципам: клиентоориентированности и стремлении к результату.#i-img456#titleНачало Пути: Ориентир на Клиента#pОднажды я понял одну простую вещь: успех в веб-разработке — это не только код, но и понимание нужд клиента. Всё началось с кафе "У Вероники", где мы не просто создали сайт, но и воплотили в нём душу этого уютного места.#titleФилософия Матрёшки: Ваши Желания — Наша Работа#pКаждый клиент для нас — это не просто заказчик, это партнёр. Мы слушаем вас, чтобы понять ваши цели, и работаем вместе, чтобы достичь их. Ваш успех — наш успех.#t-tТут я бы написал что то ваджное если было настроение сидеть и придумывать текст! ChatGPT ты прекрасен#i-img456#titleРабота, Направленная на Результат#pВ Матрёшке мы не просто создаём сайты; мы создаём инструменты для вашего бизнеса. Наша задача — достичь конкретного, измеримого результата, который поможет вашему бизнесу расти и процветать.#pНаши успехи, рост и довольные клиенты — это результат верности нашим ценностям. Мы никогда не отступаем от принципов клиентоориентированности и ориентации на результат.';

// const articles: Article[] = [
//   {
//     id: 1,
//     name: "website-building-article",
//     title: "Дизайн сайта — это музыка, где каждый элемент играет свою партию",
//     description:
//       "В статье я постарался передать ощущения и искрений подход команды студии Матрёшкa к созданию сайтов. Мы верим в то что сайт это лицо бизнеса и делаем его прекрасным.",
//     createdAt: "13 Апреля 2021 г.",
//     text: website_building_article,
//     author: {
//       img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpeg&w=1920&q=75",
//       name: "Борисов Максим",
//       surname: "",
//       jobTitle: "Директор студии",
//     },
//   },
//   {
//     id: 2,
//     name: "web-disign-article",
//     title: "Как привлечь и удержать внимание клиентов",
//     description:
//       "В статье описаны важнейшие принципы и алгоритмы. Которые помогают максимально долго удерживать внимание клиента на сайте. А значит и покупать Ваши товары. Дизайн как чать торговой мануфактуры не менее важен, чем сама экономическая модель.",
//     createdAt: "18 Июня 2023 г.",
//     text: web_disign_article,
//     author: {
//       img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fangela-fisher.f2122cd4.jpeg&w=1920&q=75",
//       name: "Константин Берия",
//       surname: "",
//       jobTitle: "UI/UX Дизайнер",
//     },
//   },
//   {
//     id: 3,
//     name: "your-success",
//     title: "Ваш успех — наш успех.",
//     description:
//       "Это история о верности двум основным принципам: клиентоориентированности и стремлении к результату, Которые легли в основу создания бренда. Это не зыблимые правила которые отражаются на каждлом созданном проекте.",
//     createdAt: "1 Декабря 2022 г.",
//     text: reation_studio,
//     author: {
//       img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
//       name: "Константин Браун",
//       surname: "",
//       jobTitle: "Учредитель студии",
//     },
//   },
// ];
