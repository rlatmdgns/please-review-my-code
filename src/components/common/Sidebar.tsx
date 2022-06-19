import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Wrapper>
      <Title>PLEVIEW</Title>
      <Menus>
        <Menu>
          <Link to="/">Home</Link>
        </Menu>
        <Menu>
          <Link to="/createReview">질문 등록하기</Link>
        </Menu>
        <Menu>
          <Link to="/detail:id">답변하기</Link>
        </Menu>
        <Menu>
          <Link to="/sample">명예의 전당</Link>
        </Menu>
      </Menus>
    </Wrapper>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 50px;
`;

const Wrapper = styled.nav`
  width: 260px;
  height: 100vh;
  background-color: #313a46;
  padding: 20px;
`;

const Menus = styled.ul``;

const Menu = styled.li`
  margin-bottom: 2rem;
`;

const Link = styled(NavLink)`
  font-size: 1.1rem;
  display: block;
  color: #8391a2;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;
