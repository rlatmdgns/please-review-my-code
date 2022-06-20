import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { POST_SEND_ATOM } from 'store';
import { Layout } from 'components/common/Layout';
import { Category } from './Category';
import { TitleInput } from './TitleInput';
import { Tag } from './Tag';
import { Editor } from './Editor';
import { AuthContext } from 'utils/firebase';

const CreateReview = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const [, sendPost] = useAtom(POST_SEND_ATOM);

  useEffect(() => {
    if (!user) {
      alert(`로그인하셔야 이용할 수 있습니다.`);
      navigate(`/`);
    }

    return () => {};
  }, [user]);

  async function handleRegister() {
    if (!user || Object.hasOwnProperty.call(user, 'uid') === false) return;

    await sendPost({
      author: user.uid,
      callback: (createdPostId: string) => {
        navigate(`/detail/${createdPostId}`);
      },
    });
  }
  return (
    <Layout>
      <TitleInput />
      <Category />
      <Tag />
      <Editor />

      <SubmitContainer>
        <SubmitButton onClick={handleRegister}>등록하기</SubmitButton>
      </SubmitContainer>
    </Layout>
  );
};

const SubmitContainer = styled.div`
  margin: 20px;
`;

const SubmitButton = styled.button`
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  :hover,
  :focus {
    background-color: #07c;
  }

  :focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  :active {
    background-color: #0064bd;
  }
`;

export default CreateReview;
