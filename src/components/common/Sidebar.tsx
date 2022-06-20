import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Wrapper>
      <Title>
        <NavLink to="/">PLEVIEW</NavLink>
      </Title>
      <Menus>
        <Menu>
          <Link to="/">Home</Link>
        </Menu>
        <Menu>
          <Link to="/createReview">질문 등록하기</Link>
        </Menu>
        <Menu>
          <Link to="/honor">명예의 전당</Link>
        </Menu>
      </Menus>
    </Wrapper>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;

  a {
    color: #fff;
    display: block;
  }
`;

const Wrapper = styled.nav`
  min-width: 260px;
  min-height: 100vh;
  background-color: #313a46;
  padding: 20px;
`;

const Menus = styled.ul``;

const Menu = styled.li`
  margin-bottom: 2rem;

  .active {
    color: #fff;
  }
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
