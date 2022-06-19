import { firebaseApp } from '../app';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { User } from 'firebase/auth';

export const db = getFirestore(firebaseApp);

export type IdType = {
  id: string;
};

export type TagType = {
  name: string;
} & IdType;

export type CategoryType = {
  name: string;
} & IdType;

export type PostType = {
  title: string;
  content: string;
  code: string;
  editDate: Date;
  author: string;
  tag: string;
  category: string;
} & IdType;

const TYPE_USERS = 'users';
const TYPE_POSTS = 'posts';
const TYPE_CATEGORIES = 'categories';
const TYPE_TAGS = 'tags';

export class FbService {
  public async createUser(user: User) {
    const { uid, displayName, email } = user;
    const q = await query(collection(db, TYPE_USERS), where('uid', '==', user?.uid));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      await addDoc(collection(db, TYPE_USERS), { uid, displayName, email });
    }
  }

  public async createPost(post: PostType) {
    try {
      return await addDoc(collection(db, TYPE_POSTS), post);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  public async getPosts() {
    return this.getList<PostType>(TYPE_POSTS);
  }

  public async getPostById(postId: string) {
    return this.getById(TYPE_POSTS, postId);
  }

  public async getCategories() {
    return this.getList<CategoryType>(TYPE_CATEGORIES);
  }

  public async getTags() {
    return this.getList<TagType>(TYPE_TAGS);
  }

  private async getList<T extends IdType>(collectionName: string) {
    const result: T[] = [];
    const q = await query(collection(db, collectionName));
    const results = await getDocs(q);
    results.forEach((document) => result.push({ id: document.id, ...document.data() } as T));

    return result;
  }

  public async getById(collectionName: string, id: string) {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('not exists data');
    }

    return docSnap.data();
  }

  async sample() {
    const postList = await this.getPosts();
    console.log(postList);

    if (postList) {
      const res = await this.getPostById(postList[0].id);
      console.log(res);
    }

    console.log(await this.getCategories());
    console.log(await this.getTags());
  }
}

export const fbService = new FbService();
