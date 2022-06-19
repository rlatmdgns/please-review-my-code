import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';
import { Card } from './Card';
// import { ICard } from '../utils/types/post';
import { Layout } from '../../components/common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICard, IFilter } from 'utils/types/post';

const categoryArray = ['디버깅', '클린코드', '아키텍처'];
const skillArray = ['React', 'Javascript', 'Typescript'];

// TODO: erase
function getCardData(): Promise<ICard[]> {
  const dummyData: ICard[] = [
    {
      category: '디버깅',
      title: '제목제목',
      tag: ['Javascript', 'React'],
      date: '2022-03-13',
      user: '아이',
    },
    {
      category: '클린코드',
      title: '우아아',
      tag: ['Typescript'],
      date: '2022-07-19',
      user: '아이디',
    },
  ];

  return new Promise((resolve) => resolve(dummyData));
}

const Feed = () => {
  const [categoryActiveIdx, setCategoryActiveIdx] = useState(0);
  const [cardData, setCardData] = useState<ICard[]>([]);
  const [cardFilter, setCardFilter] = useState<IFilter>({
    skill: undefined,
    category: undefined,
  });

  // const [categoryFilter, setCategoryFilter] = useState<ICategory>();
  // const [tagFilter, setTagFilter] = useState<ICard[]>();

  useEffect(() => {
    (async () => {
      // await axios.get('http://localhost:8080');
      // TODO: erase
      const fetchedCardData = await getCardData();
      setCardData(fetchedCardData);
    })();
  }, []);

  const handleClickCategory = (idx: number, category: string) => {
    setCategoryActiveIdx(idx);
    setCardFilter({ ...cardFilter, category: category });
  };

  // 혹시
  //??
  const skillAll = ['React', 'Javascript', 'Typescript'];

  const handleFilter = (skill: string) => {
    setCardFilter({ ...cardFilter, skill: skill });
  };

  // 여기서 처리할려고해요 렌더링 될 때
  const renderCardData = () => {
    const filteredData = cardData
      .filter((data) => {
        if (!cardFilter.skill) return true;
        return data.tag.includes(cardFilter.skill);
      })
      .filter((data) => {
        if (!cardFilter.category) return true;
        return data.category === cardFilter.category;
      });
    return filteredData.map((card: ICard, idx) => <Card key={idx} card={card} />);
  };

  return (
    <Layout>
      <FlexColumn>
        <CategoryBox>
          {categoryArray.map((category, idx) => (
            <Category
              key={`${idx}_${category}`}
              onClick={() => handleClickCategory(idx, category)}
              active={categoryActiveIdx === idx}
            >
              {category}
            </Category>
          ))}
        </CategoryBox>
        <Skills>
          {skillArray.map((skill, idx) => (
            <Skill key={idx} onClick={() => handleFilter(skill)}>
              {skill}
            </Skill>
          ))}
        </Skills>
      </FlexColumn>
      <CardContainer>{renderCardData()}</CardContainer>
    </Layout>
  );
};

const CategoryBox = styled.ul`
  display: flex;
  position: relative;
  margin-bottom: 40px;
  padding: 24px 0;
  border-bottom: 1px solid #8e8e8e;
`;

const Bar = styled.div<{ index: number }>`
  position: absolute;
  top: 70px;
  left: 0;
  width: 150px;
  height: 4px;
  background-color: ${({ theme }) => theme.color.primary};
  transition: all 0.4s ease-in-out;
  transform: ${(props) => `translateX(calc(150*${props.index}px))`};
  border-bottom: 1px solid #dedede;
`;

const Category = styled.li<{ active?: boolean }>`
  font-weight: 600;
  text-align: center;
  min-width: 150px;
  color: ${(props) => (props.active ? '#333' : '#8e8e8e')};
  font-size: 1.2rem;
  cursor: pointer;
  display: block;
  padding: 24px 0;
  border-bottom: 1px solid #333;
  border-bottom-color: ${(props) => (props.active ? '#333' : 'transparent')};
`;

const CardContainer = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 20px 10px;
`;

// const Category = styled.li<{ active?: boolean }>`
//   font-size: 24px;
//   font-weight: 600;
//   text-align: center;
//   width: 150px;
//   color: ${(props) => (props.active ? '#000000' : '#8e8e8e')};
//   cursor: pointer;
// `;

// const Skill = styled.div`
//   padding: 12px 20px;
//   border: 1px solid #8e8e8e;
//   border-radius: 40px;
//   margin-right: 24px;
//   font-size: 24px;
//   font-weight: 600;
//   cursor: pointer;
//   gap: 20px;
// `;

const Skills = styled.ul`
  display: flex;
  margin-bottom: 30px;
  gap: 24px;
`;

const Skill = styled.li`
  padding: 12px 20px;
  border: 1px solid #dedede;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: #a9a9a9;
  }
`;

export default Feed;
