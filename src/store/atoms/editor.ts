import { atom } from 'jotai';

export const TITLE_ATOM = atom<string>('');
export const TAGS_ATOM = atom<string[]>([]);
export const CONTENT_ATOM = atom<string>('');
export const CODE_ATOM = atom<string>('');
