import { firebaseApp } from '../app';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { User } from 'firebase/auth';

export const db = getFirestore(firebaseApp);

export type IdType = {
  id?: string;
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
  editDate: any;
  author: string;
  tags: string[];
  category: string;
  authorInfo?: UserType;
} & IdType;

export type CommentType = {
  author: string;
  content: string;
  postId: string;
  parentId: string;
  regDate: Date;
} & IdType;

export type UserType = {
  displayName: string;
  email: string;
  photoURL: string;
} & IdType;

const TYPE_USERS = 'users';
const TYPE_POSTS = 'posts';
const TYPE_CATEGORIES = 'categories';
const TYPE_TAGS = 'tags';
const TYPE_COMMENTS = 'comments';

export class FbService {
  public async createUser(user: User) {
    const { uid, displayName, email, photoURL } = user;
    const q = await query(collection(db, TYPE_USERS), where('id', '==', user?.uid));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      await addDoc(collection(db, TYPE_USERS), { id: uid, displayName, email, photoURL } as UserType);
    }
  }

  public async createPost(post: PostType) {
    if (!post.author) {
      throw new Error('author가 없습니다');
    }

    if (!post.content) {
      throw new Error('content가 없습니다');
    }

    if (!post.code) {
      throw new Error('code가 없습니다');
    }

    return this.create<PostType>(TYPE_POSTS, post);
  }

  public async createComment(comment: CommentType) {
    if (!comment.postId) {
      throw new Error('postId가 없습니다');
    }

    if (!comment.author) {
      throw new Error('author가 없습니다');
    }

    if (!comment.content) {
      throw new Error('내용을 입력하세요');
    }

    return this.create<CommentType>(TYPE_COMMENTS, comment);
  }

  public async getPosts() {
    const result = await this.getList<PostType>(TYPE_POSTS);

    for (const post of result) {
      post.authorInfo = await this.getUserById(post.author);
    }

    const posts = await this.getList<PostType>(TYPE_POSTS);
    posts.sort((a, b) => b.editDate - a.editDate);

    return posts;
  }

  public async getCommentsByPostId(postId: string) {
    const result: CommentType[] = [];
    const q = await query(collection(db, TYPE_COMMENTS), where('postId', '==', postId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((result1) => {
      const data = result1.data();
      result.push({ id: result1.id, ...data } as CommentType);
    });

    return result;
  }

  public async getUserById(userId: string) {
    const q = await query(collection(db, TYPE_USERS), where('id', '==', userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      return;
    }

    const result: UserType[] = [];

    querySnapshot.forEach((item) => {
      result.push(item.data() as UserType);
    });

    return result[0];
  }

  public async getPostById(postId: string) {
    const post = await this.getById(TYPE_POSTS, postId);
    post.authorInfo = await this.getUserById(post.author);

    return post;
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

  private async getById(collectionName: string, id: string) {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('not exists data');
    }

    return docSnap.data();
  }

  private async create<T>(collectionName: string, item: T) {
    try {
      return await addDoc(collection(db, collectionName), item);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async sample() {
    const postList = await this.getPosts();
    console.log(postList);

    const comments = await this.getCommentsByPostId('Twfs3nFkZichweeRtYJf');
    console.log(comments, 'this is comment');
  }
}

export const fbService = new FbService();
