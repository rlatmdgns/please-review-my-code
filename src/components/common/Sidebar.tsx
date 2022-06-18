import styled from 'styled-components';
import { FlexCenter } from 'styles/theme';

export const Sidebar = () => {
  return (
    <Wrapper>
      <Title>Pleview</Title>
      <Menu>Home</Menu>
      <Menu>질문 등록하기</Menu>
      <Menu>답변하기</Menu>
      <Menu>명예의 전당</Menu>
    </Wrapper>
  );
};

const Wrapper = styled(FlexCenter)`
  width: 200px;
  height: 100vh;
  border-right: 1px solid #8e8e8e;
  background-color: #62403a;
`;

const Title = styled.h1`
  padding: 40px 0;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

const Menu = styled.div`
  margin: 40px 0;
  font-size: 24px;

`;