import { firebaseApp } from '../app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const db = getFirestore(firebaseApp);

const PATHS = {
  POSTS: 'POSTS',
};

export type PostType = {
  title: string;
  content: string;
  editDate: Date;
  author: string;
  tag: string;
  category: string;
};

export class Posts {
  async createPost(post: PostType) {
    try {
      return await addDoc(collection(db, PATHS.POSTS), post);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}

export const posts = new Posts();
