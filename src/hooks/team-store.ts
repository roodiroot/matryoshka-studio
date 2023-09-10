import { create } from "zustand";

import { fetchTeamApi } from "@/http/teamAPI";
import { Author, AuthorType } from "@/types";

interface TeamStoreInterface {
  team: Author[] | [];
  fetchTeam: (type?: AuthorType) => Promise<void>;
}

export const useTeamStore = create<TeamStoreInterface>((set) => ({
  team: [],
  fetchTeam: async (type) => {
    const data = await fetchTeamApi(type);
    set({ team: data });
  },
}));
