import { Article } from "@/types";
import { $host } from ".";

export const fetchArticlesApi = async (): Promise<Article[]> => {
  const { data } = await $host.get("api/article");
  return data;
};

export const fetchArticleByName = async (name: string): Promise<Article> => {
  const { data } = await $host.get(`api/article/${name}`);
  return data;
};
