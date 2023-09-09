import { create } from "zustand";

import { Project } from "@/types";
import { fetchOneProjectByNameAPI, fetchProjectsAPI } from "@/http/projectsAPI";

interface WorkStoreInterface {
  projectsTest: Project[] | [];
  projectSelect: Project | undefined;
  fetchProjects: () => void;
  fetchOneProject: (name: string) => void;
}

export const useWorkStore = create<WorkStoreInterface>((set) => ({
  projectsTest: [],
  projectSelect: undefined,
  fetchProjects: async () => {
    const data = await fetchProjectsAPI();
    set({ projectsTest: data });
  },
  fetchOneProject: async (name: string) => {
    const project = await fetchOneProjectByNameAPI(name);
    set({ projectSelect: project });
  },
}));

// #title - Заголовок
// #p - Параграф
// #i-img*** - Картика

// const kondish =
//   "#titleПонимание Эссенции#pПрежде чем приступить к работе, мы погрузились в мир кондиционеров и сплит систем. Это был мир комфорта и свежести, где каждый продукт нес в себе заботу о клиенте. И именно это мы стремились передать через дизайн веб-сайта.#pСоздание онлайн-магазина требовало особого внимания к деталям. Мы не просто выставили товары на витрину, но и обеспечили максимальное удобство для клиентов, добавив возможность онлайн-консультаций и подбора системы кондиционирования по параметрам помещения.#titleРекламная Кампания: Свежесть в Каждом Клике#pРекламная кампания была нацелена на то, чтобы показать, как легко и приятно может быть преобразование жизненного пространства с помощью правильно подобранного кондиционера. Мы создали рекламные ролики, которые не просто рассказывали о продукте, но и дарили ощущение свежести.#pС первых дней после запуска мы заметили, что клиенты охотно проводят время на сайте, а конверсия магазина выросла на 35%. Отзывы о новой рекламной кампании были восторженными, и заказы пошли в рост.#titleЗаключение#pРаботая над этим проектом, мы поняли, что технологии могут быть не только функциональными, но и эмоциональными. Вместе с нашим клиентом мы создали не просто сайт, а виртуальный оазис комфорта, где каждый может найти свой идеальный кондиционер.#pЭтот проект стал для нас не просто очередным заданием, но вдохновением, доказательством того, что даже в самых неожиданных вещах можно найти красоту и тепло. Спасибо нашему клиенту за этот удивительный опыт и доверие к нашей команде!";

// const zoj =
//   '#titleВизуализация Бренда#pС начала работы над проектом, нам было важно уловить душу бренда "Здоровье и Красота". Наш дизайнерский отдел создал не просто красивую картину, а историю. Каждый элемент, каждый цвет и шрифт были продуманы так, чтобы передать философию здорового образа жизни.#titleМагазин в Виртуальном Пространстве#pВнедрение интернет-магазина оказалось сложным процессом. Нам нужно было создать не просто платформу для продаж, но место, где клиент будет чувствовать себя уютно и надежно. Система управления товарами, безопасность платежей, интуитивный интерфейс — каждая деталь была важна.#titleРеклама как Искусство#pСоздание рекламной кампании стало завершающим этапом нашего путешествия в мир "Здоровья и Красоты". Мы хотели не просто рассказать о продуктах компании, но заинтриговать, завоевать доверие и вдохновить на здоровый образ жизни.#titleРезультаты, которые Вдохновляют#pКогда через три месяца после запуска сайта мы увидели 75% рост посещаемости и 40% увеличение конверсии интернет-магазина, мы поняли, что сделали нечто большее, чем просто сайт. Мы создали живую вселенную бренда, которая будет расти и развиваться вместе с компанией "Здоровье и Красота".#pОт лица всей нашей команды хочу выразить глубокую благодарность ООО "Здоровье и Красота" за доверие и возможность быть частью этого удивительного проекта. Ваши мечты стали нашим вдохновением, а результаты — лучшим подтверждением того, что виртуальный мир может быть таким же живым и настоящим, как и реальный.';

// const texas_arenda =
//   "#titleТонкий Мир Инструмента#pС самого начала нам было важно понять, что каждый инструмент – это не просто механизм, это партнёр, помощник в работе. Мы хотели создать сайт, который бы отражал эту философию, исключая холодный технологический подход.#pОнлайн-каталог инструментов был создан так, чтобы каждый мастер, будь то профессионал или новичок, мог легко найти подходящий инструмент. Интерактивный помощник, подбор инструмента по задачам и детальные описания сделали выбор удобным и приятным.#titleРеклама как Мастерство#pРекламная кампания должна была передать не только удобство аренды, но и вдохновение от работы с качественным инструментом. Мы создали рекламные материалы, в которых каждый мог увидеть себя мастером своего дела.#pРезультаты превзошли все ожидания. Увеличение посещаемости сайта на 60% и рост заказов на 50% в первые два месяца стали отражением нашей совместной работы.#pЭтот проект стал для нас не просто созданием сайта, но погружением в мир, где инструмент – это больше, чем просто устройство. Вместе с нашим клиентом мы создали виртуальную мастерскую, где каждый может найти свой ключ к творчеству.#pСпасибо нашему клиенту за доверие, благодаря которому мы смогли реализовать этот уникальный проект. Ваш мир инструментов стал для нас источником вдохновения и понимания того, что даже в самых практичных вещах можно найти красоту и искусство.";
// [
//   {
//     name: "kondish",
//     teme: "Тематическое исследование",
//     title: "Установка кондиционеров и сплит-систем",
//     description:
//       "Мы ощутили не только тепло приближающегося лета, но и жар борьбы с новым вызовом.",
//     info: [
//       { title: "Клиент", name: "Kondish" },
//       { title: "Дата", name: "Январь 2023" },
//       { title: "Услуга", name: "Разработка сайта" },
//     ],
//     img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=1920&q=90",
//     article: kondish,
//     stack: ["Smart contracts", "Backend (Solidity)", "SEO", "Инфраструктура"],
//     feedback: {
//       name: "Александр",
//       job_title: "генеральный директор Kondish",
//       img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdebra-fiscal.c5e84807.jpeg&w=384&q=75",
//       text: "Я особенно горжусь простотой и интуитивной навигацией нашего сайта. Пользователи будут легко ориентироваться и использовать все его функции. Наш сайт - не просто визитная карточка, но и мощный инструмент для достижения целей.",
//     },
//     achieved: [
//       { title: "25%", description: "Меньше трафика" },
//       { title: "10x", description: "Время загрузки страницы" },
//       { title: "15%", description: "Более высокие затраты на инфраструктуру" },
//       { title: "1,2 миллиона долларов", description: "Юридические услуги" },
//     ],
//   },
//   {
//     name: "health-and-beauty",
//     teme: "Тематическое исследование",
//     title: "Создание бренда медицинской компании",
//     description:
//       "Была поставлена задача создания не просто сайта, а целой виртуальной вселенной бренда.",
//     info: [
//       { title: "Клиент", name: "Health & beauty" },
//       { title: "Дата", name: "Июль 2022" },
//       { title: "Услуга", name: "Разработка сайта" },
//     ],
//     img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=1920&q=90",
//     article: zoj,
//     stack: [
//       "Внешний интерфейс (Next.js)",
//       "Пользовательская CMS",
//       "SEO",
//       "Инфраструктура",
//     ],
//     feedback: {
//       name: "Андреева Ольга",
//       job_title: "менеджер проекта Health & beauty",
//       img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdebra-fiscal.c5e84807.jpeg&w=384&q=75",
//       text: "Я просто не могу сдержать своего восхищения после окончания работы над сайтом. Это было невероятное путешествие, наполненное креативом, весельем и невероятным взаимодействием.",
//     },
//     achieved: [
//       { title: "25%", description: "Меньше трафика" },
//       { title: "10x", description: "Время загрузки страницы" },
//       { title: "15%", description: "Более высокие затраты на инфраструктуру" },
//       { title: "1,2 миллиона долларов", description: "Юридические услуги" },
//     ],
//   },
//   {
//     name: "texas-arenda",
//     teme: "Тематическое исследование",
//     title: "Аренда электро и бензо инструмента",
//     description:
//       "Философия компании: мир где каждый инструмент – ключ к созданию чего-то нового.",
//     info: [
//       { title: "Клиент", name: "Texas Arenda" },
//       { title: "Дата", name: "Декабрь 2021" },
//       { title: "Услуга", name: "Разработка сайта" },
//     ],
//     img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=1920&q=90",
//     article: texas_arenda,
//     stack: [
//       "Внешний интерфейс (Next.js)",
//       "Пользовательская CMS",
//       "SEO",
//       "Инфраструктура",
//     ],
//     feedback: {
//       name: "Руслан",
//       job_title: "менеджер проекта студии",
//       img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdebra-fiscal.c5e84807.jpeg&w=384&q=75",
//       text: "Он передаёт уникальность, профессионализм и преданность клиентам. Когда люди будут находиться на вашем веб-сайте, они чувствуют заботу и приверженность, которыми исходили от нашей команды во время разработки.",
//     },
//     achieved: [
//       { title: "27%", description: "Больше трафика" },
//       { title: "0.001", description: "Время загрузки страницы" },
//       { title: "15%", description: "Более низкие затраты на инфраструктуру" },
//       { title: "500к рублей", description: "Снижены расходы на рекламу" },
//     ],
//   },
// ];
