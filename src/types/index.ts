export interface Article {
  id: number;
  name: string;
  title: string;
  description: string;
  createdAt: string;
  text: string;
  author: { img: string; name: string; surname: string; jobTitle: string };
}

export interface Project {
  id: number;
  name: string;
  teme: string;
  title: string;
  description: string;
  infoProject: { title: string; description: string }[];
  img: string;
  article: string;
  stack: string[];
  review: {
    author: {
      name: string;
      surname: string;
      jobTitle: string;
      img: string;
    };
    text: string;
  };
  achieved: { title: string; description: string }[];
}

export interface Author {
  id: number;
  name: string;
  surname: string;
  img: string;
  jobTitle: string;
  type: AuthorType;
}

export enum AuthorType {
  TEAM = "TEAM",
  CLIENT = "CLIENT",
}
