"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import PortfolioItem from "./components/portfolio-item";
import { useWorkStore } from "@/hooks/work-store";

const portfolioList = [
  {
    id: 1,
    name: "famili_fund",
    title: "Пропустите банк, займите у тех, кому вы доверяете",
  },
  { id: 2, name: "hold", title: "Получите ходл вашего здоровья" },
  { id: 3, name: "pare", title: "Преодолейте свои страхи, найдите свою пару" },
];

const PortfolioBlock = () => {
  const { projects } = useWorkStore();
  return (
    <ClassicContainer className='mt-40'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={blockUp}
            className='font-display text-2xl font-semibold text-neutral-950'
          >
            Наши последние работы
          </motion.h2>
        </motion.div>
        <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
          {projects?.map((i) => (
            <PortfolioItem
              key={i.name}
              title={i.title}
              description={i.description}
              teme={i.teme}
              name={i.name}
              year={i?.info?.filter((d) => d.title === "Дата")[0]?.name}
              company={i?.info?.filter((d) => d.title === "Клиент")[0]?.name}
              stack={i.stack}
              feedback={i?.feedback}
            />
          ))}
        </div>
      </div>
    </ClassicContainer>
  );
};

export default PortfolioBlock;
