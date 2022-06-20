<<<<<<< HEAD
=======
import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';
import { Card } from './Card';
// import { ICard } from '../utils/types/post';
import { Layout } from '../../components/common/Layout';
>>>>>>> f78f7e84fae9fc7d592ee78fce156c7823d720ce
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'components/common/Layout';
import { Card } from './Card';
import { FlexBox, FlexColumn } from 'styles/theme';
import { IFilter } from 'utils/types/post';
import { fbService, PostType } from 'utils/firebase/db';
import { CATEGORIES, SKILLS } from 'utils/constants';
import { clearLine } from 'readline';

const Feed = () => {
  const [categoryActiveIdx, setCategoryActiveIdx] = useState(0);
  const [cardData, setCardData] = useState<PostType[]>([]);
  const [cardFilter, setCardFilter] = useState<IFilter>({
    skill: undefined,
    category: '전체',
  });

  useEffect(() => {
    (async () => {
      const fetchedCardData = await fbService.getPosts();
      setCardData(fetchedCardData);
    })();
  }, []);

  const handleClickCategory = (idx: number, category: string) => {
    setCategoryActiveIdx(idx);
    setCardFilter({ ...cardFilter, category });
  };

  const handleFilter = (skill: string) => {
    setCardFilter({ ...cardFilter, skill });
  };

  const renderCardData = () => {
    const filteredData = cardData
      .filter((data) => {
        if (!cardFilter.skill) return true;
        return data.tags.includes(cardFilter.skill);
      })
      .filter((data) => {
        if (!cardFilter.category || cardFilter.category === '전체') return true;
        return data.category === cardFilter.category;
      });

    return filteredData.map((card: PostType, idx) => (
      <Link key={idx} to={'/detail/' + card.id}>
        <Card card={card} />
      </Link>
    ));
  };

  return (
    <Layout>
      <FlexColumn>
        <CategoryBox>
          {CATEGORIES.map((category, idx) => (
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
          {SKILLS.map((skill, idx) => (
            <Skill key={`${idx}_${skill}`} onClick={() => handleFilter(skill)}>
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
  margin-bottom: 20px;
  padding: 24px 0;
`;

const Category = styled.li<{ active?: boolean }>`
  min-width: 150px;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.active ? '#333333' : '#8391a2')};
  text-align: center;
  border-bottom: 3px solid ${({ theme }) => theme.color.black};
  border-bottom-color: ${(props) => (props.active ? '#333333' : 'transparent')};
  cursor: pointer;
`;

const Skills = styled.ul`
  display: flex;
  margin-bottom: 70px;
`;

const Skill = styled.li`
  padding: 12px 20px;
  margin-right: 14px;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.color.lightgray};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.gray};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const CardContainer = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 24px 24px;
`;

export default Feed;
