"use client";
import ClassicContainer from "@/components/classic-container";
import PersonalList from "./components/personal-list";
import { useTeamStore } from "@/hooks/team-store";
import { useEffect } from "react";
import { AuthorType } from "@/types";

export interface mangersListType {
  id: number;
  name: string;
  jobTitle: string;
  img: any;
}

const CommandBlock = () => {
  const { team, fetchTeam } = useTeamStore();
  useEffect(() => {
    fetchTeam(AuthorType.TEAM);
  }, []);

  return (
    <ClassicContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24'>
        <PersonalList title='Команда' personal={team} />
      </div>
    </ClassicContainer>
  );
};

export default CommandBlock;
