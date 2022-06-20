import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from './Card';
import { Layout } from 'components/common/Layout';
import { FlexBox, FlexColumn } from 'styles/theme';
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
  margin-bottom: 40px;
  padding: 24px 0;
  border-bottom: 1px solid #8e8e8e;
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
