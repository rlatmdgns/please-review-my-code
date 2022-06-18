import { Sidebar } from 'components/common/Sidebar';
import styled from 'styled-components';
import { Box, FlexBox, FlexColumn } from 'styles/theme';
import { Card } from './Card';

const Feed = () => {
  return (
    <FlexBox>
      <Sidebar />
      <Wrapper>
        <FlexColumn>
          <FlexBox>
            <Category>디버깅</Category>
            <Category>클린코드</Category>
            <Category>아키텍처</Category>
          </FlexBox>
          <Box height="40px" />
          <FlexBox>
            <Skill>React</Skill>
            <Skill>Typescript</Skill>
            <Skill>Javascript</Skill>
          </FlexBox>
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

const CardContainer = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 20px 10px;
`;

const Category = styled.div`
  font-size: 24px;
  margin-right: 24px;
`;

const Skill = styled.div`
  border: 1px solid #8e8e8e;
  border-radius: 16px;
  font-size: 24px;
  font-weight: 600;
`;

export default Feed;
