import { fetchArticlesApi } from '@/http/blogAPI'
import { fetchProjectsAPI } from '@/http/projectsAPI'
import { MetadataRoute } from 'next'
 
export default async function sitemap(){

    const baseUrl ="https://matryoshka-studio.ru"

    // Get All Works
    const projects = await fetchProjectsAPI()
    const projectsUrls = projects?.map((project) => {
        return {
            url: `${baseUrl}/work/${project.name}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          }
    }) ?? []
    // Get All Articles
    const articles = await fetchArticlesApi()
    const articlesUrls = articles?.map((article) => {
        return {
            url: `${baseUrl}/blog/${article.name}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
          }
    }) ?? []


  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...projectsUrls,
    ...articlesUrls
  ]
}