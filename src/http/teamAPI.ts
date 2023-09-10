import { Author, AuthorType } from "@/types";
import { $host } from ".";

export const fetchTeamApi = async (type?: AuthorType): Promise<Author[]> => {
  const { data } = await $host.get(`api/author?type=${type}`);
  return data;
};
