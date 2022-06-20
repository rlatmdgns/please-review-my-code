import { atom } from 'jotai';
import { fbService } from 'utils/firebase/db';

export const TITLE_ATOM = atom<string>('');
export const CATEGORY_ATOM = atom<string>('');
export const TAGS_ATOM = atom<string[]>([]);
export const CONTENT_ATOM = atom<string>('');
export const CODE_ATOM = atom<string>('');
export const MARKDOWN_ATOM = atom<string>('');

export const POST_SEND_ATOM = atom(null, async (get, set, args: any) => {
  const title = get(TITLE_ATOM);
  const category = get(CATEGORY_ATOM);
  const tags = get(TAGS_ATOM);
  const content = get(CONTENT_ATOM);
  const code = get(CODE_ATOM);
  const markdown = get(MARKDOWN_ATOM);
  const author = args.author;
  const editDate = new Date();

  if (!title) {
    alert('제목을 입력하세요');
    return;
  }

  if (!content) {
    alert('질문을 입력하세요');
    return;
  }

  if (!code) {
    alert('코드를 입력하세요');
    return;
  }

  const data = { title, category, tags, content, code, author, editDate, markdown };

  const result = await fbService.createPost(data);

  if (result) {
    args.callback(result.id);
  }
});
