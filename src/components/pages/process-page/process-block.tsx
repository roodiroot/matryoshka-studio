import ContainerProcwssBlock from "@/components/pages/process-page/components/container-procwss-block";
import img1 from "@/assets/img/laptop.webp";
import img2 from "@/assets/img/meeting.webp";
import img3 from "@/assets/img/whiteboard.webp";

const stapsBlock1 = [
  "Анализ бизнеса",
  "Сбор требований",
  "Исследование конкурентов",
  "Технический аудит",
  "Выбор технологий и платформы",
  "Сбор ключевых показателей",
];
const stapsBlock3 = [
  {
    title: "SEO Оптимизация и Анализ.",
    description:
      "Постоянная работа над оптимизацией контента для поисковых систем. Мониторинг позиций сайта в результатах поиска и анализ изменений.",
  },
  {
    title: "Безопасность.",
    description:
      "Защита сайта от угроз, обеспечение безопасности пользовательских данных. Реагирование на обнаруженные уязвимости и предотвращение атак.",
  },
  {
    title: "Поддержка.",
    description:
      "Ответ на вопросы пользователей и решение возникающих проблем. Обеспечение оперативной помощи и консультаций.",
  },
];

const block1 = (
  <>
    <div className='mt-12 font-display text-base font-semibold text-neutral-950'>
      Входит в этот этап
    </div>
    <ul className='mt-4 flex flex-wrap gap-4'>
      {stapsBlock1.map((i) => (
        <li
          key={i}
          className='rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600'
        >
          {i}
        </li>
      ))}
    </ul>
  </>
);
const block2 = (
  <div className='pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'>
    <figure className='text-sm'>
      <blockquote className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
        Проектирование сайта превзошло все мои ожидания, а&nbsp;визуальные
        элементы добавили дополнительную динамику&nbsp;&mdash; ваш
        профессионализм впечатляет!
      </blockquote>
      <figcaption className='mt-6 font-semibold text-neutral-950'>
        Киушкин Игорь , генеральный директор Liteechka
      </figcaption>
    </figure>
  </div>
);
const block3 = (
  <>
    <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
      В этот этав входит
    </h3>
    <div>
      <ul className='text-base text-neutral-600 mt-8'>
        {stapsBlock3.map((i) => (
          <li key={i.title} className='group mt-10 first:mt-0'>
            <div>
              <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                <strong className='font-semibold text-neutral-950'>
                  {i.title}{" "}
                </strong>
                {i.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const text_1 = (
  <>
    <p>
      Команда проводит исследование о&nbsp;бизнесе клиента, его целях, ценностях
      и&nbsp;конкурентной среде. Также анализируются{" "}
      <span className='font-semibold text-neutral-950'>потребности</span>{" "}
      и&nbsp;характеристики целевой аудитории.
    </p>
    <p>
      Определение целевой аудитории, как фундаментальная составляющая
      исследовательского этапа, направлена на&nbsp;выявление особенностей
      и&nbsp;потребностей конечных пользователей.{" "}
      <span className='font-semibold text-neutral-950'>
        Структурированный анализ{" "}
      </span>
      демографических, психографических и&nbsp;поведенческих характеристик
      аудитории обеспечивает устойчивый{" "}
      <span className='font-semibold text-neutral-950'>путь</span>{" "}
      к&nbsp;созданию интерфейса, наиболее адаптированного к&nbsp;потребностям
      пользователей.
    </p>
    <p>
      После завершения полного аудита мы&nbsp;отчитываемся о&nbsp;всем комплексе
      собранной информации&nbsp;и, что более важно, о&nbsp;бюджете.
    </p>
  </>
);
const text_2 = (
  <>
    <p>
      Основываясь на&nbsp;этапе исследования, мы&nbsp;разрабатываем концепции,
      дизайна и&nbsp;фактическую реализацию сайта. Главные шаги:
    </p>
    <p>
      &mdash;&nbsp;
      <span className='font-semibold text-neutral-950'>Создание макета</span>:
      Определение структуры и&nbsp;компоновки элементов на&nbsp;страницах сайта.
      <br />
      &mdash;&nbsp;
      <span className='font-semibold text-neutral-950'>Дизайн интерфейса</span>:
      Выбор цветовой палитры, шрифтов, создание визуальных элементов
      и&nbsp;общего стиля сайта.
      <br />
      &mdash;&nbsp;
      <span className='font-semibold text-neutral-950'>
        Разработка интерактивных элементов
      </span>
      : Внедрение анимаций, эффектов, форм и&nbsp;других интерактивных
      компонентов.
      <br />
      &mdash;&nbsp;
      <span className='font-semibold text-neutral-950'>Программирование</span>:
      Создание кода для функциональности сайта, используя языки программирования
      и&nbsp;технологии веб-разработки.
    </p>
    <p>
      Каждая деталь проходит через внимательное рассмотрение и&nbsp;утверждение.
      Мы&nbsp;с&nbsp;удовольствием сотрудничаем с&nbsp;вами на&nbsp;этом этапе,
      чтобы учесть ваши пожелания и&nbsp;гарантировать, что дизайн отражает вашу
      уникальность и&nbsp;соответствует вашим целям.
    </p>
  </>
);
const text_3 = (
  <>
    <p>
      На&nbsp;этом этапе мы&nbsp;обеспечиваем{" "}
      <span className='font-semibold text-neutral-950'>непрерывное</span>{" "}
      функционирование вашего сайта, поддерживая актуальность контента
      и&nbsp;решая любые технические вопросы. Это{" "}
      <span className='font-semibold text-neutral-950'>важный</span> этап,
      который обеспечивает долгосрочную успешность вашего веб-проекта.
    </p>
    <p>
      Регулярно обновляем и&nbsp;
      <span className='font-semibold text-neutral-950'>улучшаем</span> контент,
      а&nbsp;также добавляем новые элементы, обогащая пользовательский опыт.
      А&nbsp;так&nbsp;же постоянно проводим мониторинг и&nbsp;обслуживание
      технических аспектов сайта, гарантируя его{" "}
      <span className='font-semibold text-neutral-950'>стабильную</span> работу.
    </p>
    <p>
      На&nbsp;этом этапе мы&nbsp;стремимся обеспечить долгосрочный успех вашего
      сайта, поддерживая его актуальность и&nbsp;соответствие{" "}
      <span className='font-semibold text-neutral-950'>современным</span>
      требованиям и&nbsp;стандартам.
    </p>
  </>
);

const stap = [
  {
    id: 1,
    img: img1,
    stap: "Исследование",
    text: text_1,
    info: block1,
  },
  {
    id: 2,
    img: img2,
    stap: "Проектирование и Разработка",
    text: text_2,
    info: block2,
  },
  {
    id: 3,
    img: img3,
    stap: "Обслуживание",
    text: text_3,
    info: block3,
  },
];

const ProcessBlock = () => {
  return (
    <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
      {stap.map((i) => (
        <ContainerProcwssBlock key={i.id} info={i} />
      ))}
    </div>
  );
};

export default ProcessBlock;
