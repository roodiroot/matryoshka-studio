import { Project } from "@/types";
import { $host } from ".";

export const fetchProjectsAPI = async (): Promise<Project[]> => {
  const { data } = await $host.get("api/project");
  return data;
};
export const fetchOneProjectByNameAPI = async (
  name: string
): Promise<Project> => {
  const { data } = await $host.get(`api/project/${name}`);
  return data;
};
