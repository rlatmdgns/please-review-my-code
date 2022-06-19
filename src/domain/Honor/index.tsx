import { Layout } from 'components/common/Layout';
import { HonorList } from './HonorList';

export type HonorType = {
  id: string;
  image: string;
};

const bestReviewers: HonorType[] = [
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'test@naver.com',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export const Honor = () => {
  return (
    <Layout>
      <HonorList title="Best Reviewers" items={bestReviewers} />

      <HonorList title="Best Answers" items={bestReviewers} />
    </Layout>
  );
};
