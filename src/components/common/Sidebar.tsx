import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Wrapper>
      <Title>
        <NavLink to="/">PLEVIEW</NavLink>
      </Title>
      <ul>
        <Menu>
          <Link to="/">홈</Link>
        </Menu>
        <Menu>
          <Link to="/createReview">질문 등록하기</Link>
        </Menu>
        <Menu>
          <Link to="/honor">명예의 전당</Link>
        </Menu>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-width: 260px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 70px;

  a {
    display: block;
    color: ${({ theme }) => theme.color.white};
  }
`;

const Menu = styled.li`
  margin-bottom: 60px;

  .active {
    color: ${({ theme }) => theme.color.white};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled(NavLink)`
  display: block;
  font-size: 20px;
  color: ${({ theme }) => theme.color.gray};

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
