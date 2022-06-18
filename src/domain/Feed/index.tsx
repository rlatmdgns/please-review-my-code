import { Sidebar } from 'components/common/Sidebar';
import { useState } from 'react';
import styled from 'styled-components';
import { Box, FlexBox, FlexColumn } from 'styles/theme';
import { Card } from './Card';

const Feed = () => {
  const [active, setActive] = useState(true);
  const [index, setIndex] = useState(0);

  const handleClickCategory = (idx: number) => {
    setActive(true);
    setIndex(idx);
  };

  const categoryArray = ['디버깅', '클린코드', '아키텍처'];

  return (
    <FlexBox>
      <Sidebar />
      <Wrapper>
        <FlexColumn>
          <CategoryBox>
            {categoryArray.map((category, idx) => (
              <Category key={`${idx}_${category}`} onClick={() => handleClickCategory(idx)}>
                {category}
              </Category>
            ))}
            <Bar index={index} />
          </CategoryBox>
          <FlexBox>
            <Skill>React</Skill>
            <Skill>Typescript</Skill>
            <Skill>Javascript</Skill>
          </FlexBox>
          <Box height="30px" />
        </FlexColumn>
        <Box height="40px" />
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Wrapper>
    </FlexBox>
  );
};

const Wrapper = styled(FlexColumn)`
  width: 100%;
  padding: 40px 60px;
`;

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
`;

const CardContainer = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 20px 10px;
`;

const Category = styled.li<{ active?: boolean }>`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  width: 150px;
  color: ${(props) => (props.active ? '#000000' : '#8e8e8e')};
  cursor: pointer;
`;

const Skill = styled.div`
  padding: 12px 20px;
  border: 1px solid #8e8e8e;
  border-radius: 40px;
  margin-right: 24px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

export default Feed;
