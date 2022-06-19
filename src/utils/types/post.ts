export interface Post {
  title?: string;
  content?: string;
  tag?: string[];
  category?: string[];
  date?: string;
  comment?: Comment[];
}

export interface ICard {
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

// export interface ICategory {
//   category?: string;
// }

// export interface ITag {
//   tag?: string[];
// }

/**
 *  유저정보 받아오는 코드
 *  const user = useContext(AuthContext);
 */
