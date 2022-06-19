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

interface IFilter {
  category?: string;
  tag?: string[];
}

/**
 *  유저정보 받아오는 코드
 *  const user = useContext(AuthContext);
 */
