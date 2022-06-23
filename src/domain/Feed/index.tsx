import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';
import { Layout } from 'components/common/Layout';
import { Card } from './Card';
import { IFilter } from 'utils/types/post';
import { fbService, PostType } from 'utils/firebase/db';
import { CATEGORIES, SKILLS } from 'utils/constants';

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

  const filteredData = useMemo(() => {
    return cardData
      .filter((data) => {
        if (!cardFilter.category || cardFilter.category === '전체') return true;
        return data.category === cardFilter.category;
      })
      .filter((data) => {
        if (!cardFilter.skill || cardFilter.skill === '전체') return true;
        return data.tags.includes(cardFilter.skill);
      });
  }, [cardData, cardFilter]);

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
      <CardContainer>
        {filteredData.map((card) => {
          return (
            <Link key={card.id} to={'/detail/' + card.id}>
              <Card card={card} />
            </Link>
          );
        })}
      </CardContainer>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  margin-right: 14px;
  width: 100px;
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
