<<<<<<< HEAD
=======
import { NavLink } from 'react-router-dom';
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Wrapper>
<<<<<<< HEAD
      <Title>Pleview</Title>
      <Menu>Home</Menu>
      <Menu>질문 등록하기</Menu>
      <Menu>답변하기</Menu>
      <Menu>명예의 전당</Menu>
=======
      <Title>PLEVIEW</Title>
      <Menus>
        <Menu>
          <Link to="/">Home</Link>
        </Menu>
        <Menu>
          <Link to="">질문 등록하기</Link>
        </Menu>
        <Menu>
          <Link to="">답변하기</Link>
        </Menu>
        <Menu>
          <Link to="/sample">명예의 전당</Link>
        </Menu>
      </Menus>
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
    </Wrapper>
  );
};

<<<<<<< HEAD
const Wrapper = styled.div`
  width: 200px;
  height: 100vh;
  border-right: 1px solid #8e8e8e;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
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
=======
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
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
`;
