import styled from 'styled-components';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, AuthContext, githubProvider } from '../../utils/firebase';
import { useContext, useState } from 'react';

export const Header = () => {
  const user = useContext(AuthContext);
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const handleLoginButtonClick = async () => {
    await signInWithPopup(auth, githubProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Container>
      {user && (
        <LoggedIn active={active} onClick={() => toggleMenu()}>
          <ProfileImage src={user.photoURL as string} alt="" />
          <ul>
            <li>
              <a>마이페이지</a>
            </li>
            <li>
              <a onClick={logout}>로그아웃</a>
            </li>
          </ul>
        </LoggedIn>
      )}
      {!user && <LoginButton onClick={() => handleLoginButtonClick()}>로그인</LoginButton>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: right;
  align-items: flex-end;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #dedede;
  cursor: pointer;
`;

const LoggedIn = styled.div<{ active: boolean }>`
  position: relative;
  cursor: pointer;

  > ul {
    position: absolute;
    display: ${props => (props.active ? 'block' : 'none')};
    min-width: 200px;
    z-index: 20;
    background: #fff;
    border: 1px solid #dedede;
    top: 100%;
    margin-top: 1rem;
    right: 0;

    a {
      display: block;
      padding: 0.75rem 1rem;
      line-height: 1.5;
      font-weight: 500;
      text-decoration: none;
      color: #333;
      font-size: 0.9rem;
    }

    a:hover {
      background: #f7f7f7;
    }
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
