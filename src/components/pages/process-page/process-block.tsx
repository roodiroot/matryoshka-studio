import ContainerProcwssBlock from "@/components/pages/process-page/components/container-procwss-block";
import img1 from "@/assets/img/laptop.webp";
import img2 from "@/assets/img/meeting.webp";
import img3 from "@/assets/img/whiteboard.webp";

const stapsBlock1 = [
  "Углубленные анкеты",
  "ТЭО",
  "Образцы крови",
  "Опросы сотрудников",
  "Доказательства концепции",
  "Судебный аудит",
];
const stapsBlock3 = [
  {
    title: "Тестирование. ",
    description:
      "Наши проекты всегда имеют 100% покрытие тестами, что было бы впечатляюще, если бы наши тесты не были такими пористыми, как сито.",
  },
  {
    title: "Инфраструктура. ",
    description:
      "Для обеспечения надежности мы используем только лучшие капли Digital Ocean, которые можно купить за 4 доллара в месяц.",
  },
  {
    title: "Поддерживать.",
    description:
      "Поскольку у нас есть ключи API для каждой важной службы, которую использует ваш бизнес, вы можете рассчитывать на пожизненную поддержку и счета от нас.",
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
        Студия так регулярно обновляла прогресс, что мы почти начали думать, что
        они автоматизированы!
      </blockquote>
      <figcaption className='mt-6 font-semibold text-neutral-950'>
        Дебра Фискал , генеральный директор Unseal
      </figcaption>
    </figure>
  </div>
);
const block3 = (
  <>
    <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
      Входит в этот этап
    </h3>
    <div>
      <ul className='text-base text-neutral-600 mt-8'>
        {stapsBlock3.map((i) => (
          <li key={i.title} className='group mt-10 first:mt-0'>
            <div>
              <div className='pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'>
                <strong className='font-semibold text-neutral-950'>
                  {i.title}
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
      Мы тесно сотрудничаем с нашими клиентами, чтобы понять их{" "}
      <span className='font-semibold text-neutral-950'>потребности</span>и цели,
      внедряясь в их повседневную деятельность, чтобы понять, что движет их
      бизнесом.
    </p>
    <p>
      Наша команда частных детективов в течение нескольких недель следит за
      директором компании, пока наши менеджеры по работе с клиентами
      сосредоточены на разборе их мусора. Затем наши старшие эксперты по
      безопасности выполняют взломы с помощью социальной инженерии, чтобы
      получить доступ к своим{" "}
      <span className='font-semibold text-neutral-950'>бизнес</span> -аккаунтам,
      передавая эту информацию нашей команде судебно-бухгалтерских экспертиз.
    </p>
    <p>
      После завершения полного аудита мы отчитываемся о комплексном и, что более
      важно, о бюджете.
    </p>
  </>
);
const text_2 = (
  <>
    <p>
      Основываясь на этапе исследования, мы разрабатываем комплексную дорожную
      карту для каждого продукта и начинаем работать над его поставкой. Дорожная
      карта — это запутанная мешанина из технической чепухи, призванная затянуть
      проект как можно дольше.
    </p>
    <p>
      Каждому клиенту назначается менеджер по работе с ключевыми клиентами,
      который поддерживает открытые линии связи и скрывает фактический ход
      проекта. Они действуют как буфер между непрекращающимся ворчанием клиента
      и командой разработчиков, которая усердно работает, просматривая проекты с
      открытым исходным кодом в поисках кода для переназначения.
    </p>
    <p>
      Наши менеджеры по работе с клиентами обучены отвечать на электронные
      письма клиентов только после 21:00, через несколько дней после первого
      электронного письма. Это усиливает общее впечатление, что мы очень заняты,
      и отговаривает клиентов просить об изменениях.
    </p>
  </>
);
const text_3 = (
  <>
    <p>
      Примерно на полпути к этапу сборки мы отодвигаем каждый проект на 6 недель
      из-за изменения{" "}
      <span className='font-semibold text-neutral-950'>требований</span>. Это
      позволяет нам увеличить бюджет в последний раз перед запуском.
    </p>
    <p>
      Несмотря на то, что в основном используются готовые компоненты, большая
      часть <span className='font-semibold text-neutral-950'>работы</span> над
      каждым проектом происходит в последние 24 часа. Время разработки,
      выделенное каждому клиенту, на самом деле тратится на создание
      демонстраций дополненной реальности, которые становятся вирусными в
      Твиттере.
    </p>
    <p>
      Мы гарантируем, что основные страницы сайта будут полностью функциональны
      при запуске — вспомогательные страницы, конечно же, будут представлять
      собой оболочки lorem ipusm, которые обновляются в рамках нашего
      непомерного технического обслуживания .
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
    stap: "Проектирование",
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
        <ContainerProcwssBlock info={i} />
      ))}
    </div>
  );
};

export default ProcessBlock;
