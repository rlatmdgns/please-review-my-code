import { Layout } from 'components/common/Layout';
import { HonorList } from './HonorList';
import { useEffect, useState } from 'react';

function randomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export type HonorType = {
  id: string;
  name: string;
  image: string;
  reviewCount: number;
  answerCount: number;
};

export const Honor = () => {
  const mockImages = [
    'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  const [bestReviewers, setBestReviewers] = useState<HonorType[]>([]);

  useEffect(() => {
    const items = [];

    for (let i = 0; i < 10; i++) {
      items.push({
        id: `test${i}`,
        name: 'test@naver.com',
        reviewCount: randomNumber(0, 100),
        answerCount: randomNumber(0, 100),
        image: mockImages[randomNumber(0, 4)],
      });
    }

    setBestReviewers(items);
  }, []);

  return (
    <Layout>
      <HonorList title="Best Reviewers" items={bestReviewers} />

      <HonorList title="Best Answers" items={bestReviewers} />
    </Layout>
  );
};
