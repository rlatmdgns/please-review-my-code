export interface Post {
  title?: string;
  content?: string;
  tag?: string[];
  category?: string[];
  date?: string;
  comment?: Comment[];
}

export interface ICard {
  id: number;
  category: string;
  title: string;
  tag: string[];
  date: string;
  user: string;
}

interface Comment {
  id: string;
  name: string;
}

export interface IFilter {
  category?: string;
  skill?: string;
}
