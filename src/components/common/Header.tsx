import styled from 'styled-components';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, AuthContext, githubProvider } from '../../utils/firebase';
import { useContext } from 'react';

export const Header = () => {
  const user = useContext(AuthContext);

  const handleLoginButtonClick = async () => {
    if (!user) {
      await signInWithPopup(auth, githubProvider);
    } else {
      await signOut(auth);
    }
  };

  return (
    <Container>
      <LoginButton onClick={() => handleLoginButtonClick()}>{user ? '로그아웃' : '로그인'}</LoginButton>
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
  background: none;
  border: 1px solid #dedede;
  cursor: pointer;
`;
