import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';
import { Card } from './Card';
import { Layout } from '../../components/common/Layout';
import { useState } from 'react';

const categoryArray = ['디버깅', '클린코드', '아키텍처'];

const Feed = () => {
  const [categoryActiveIdx, setCategoryActiveIdx] = useState(0);

  const handleClickCategory = (idx: number) => {
    setCategoryActiveIdx(idx);
  };

  return (
    <Layout>
      <FlexColumn>
        <CategoryBox>
          {categoryArray.map((category, idx) => (
            <Category
              key={`${idx}_${category}`}
              onClick={() => handleClickCategory(idx)}
              active={categoryActiveIdx === idx}
            >
              {category}
            </Category>
          ))}
        </CategoryBox>
        <Skills>
          <Skill>React</Skill>
          <Skill>Typescript</Skill>
          <Skill>Javascript</Skill>
        </Skills>
      </FlexColumn>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
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
