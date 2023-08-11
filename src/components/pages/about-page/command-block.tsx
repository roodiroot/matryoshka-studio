import ClassicContainer from "@/components/classic-container";
import PersonalList from "./components/personal-list";

export interface mangersListType {
  id: number;
  name: string;
  jobTitle: string;
  img: any;
}
const mangersList: mangersListType[] = [
  {
    id: 1,
    name: "Лесли Александр",
    jobTitle: "Соучредитель / генеральный директор",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
  },
  {
    id: 2,
    name: "Майкл Фостер",
    jobTitle: "Соучредитель / технический директор",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
  },
  {
    id: 3,
    name: "Драйс Винсент",
    jobTitle: "Партнерские и деловые отношения",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
  },
];
const teamList: mangersListType[] = [
  {
    id: 1,
    name: "Лесли Александр",
    jobTitle: "Соучредитель / генеральный директор",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpeg&w=1920&q=75",
  },
  {
    id: 2,
    name: "Майкл Фостер",
    jobTitle: "Соучредитель / технический директор",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleonard-krasner.5a4a4614.jpeg&w=1920&q=75",
  },
  {
    id: 3,
    name: "Драйс Винсент",
    jobTitle: "Партнерские и деловые отношения",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
  },
  {
    id: 4,
    name: "Драйс Винсент",
    jobTitle: "Партнерские и деловые отношения",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
  },
  {
    id: 5,
    name: "Драйс Винсент",
    jobTitle: "Партнерские и деловые отношения",
    img: "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpeg&w=1920&q=75",
  },
];

const CommandBlock = () => {
  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24'>
        <PersonalList title='Менеджмент' personal={mangersList} />
        <PersonalList title='Команда' personal={teamList} />
      </div>
    </ClassicContainer>
  );
};

export default CommandBlock;
