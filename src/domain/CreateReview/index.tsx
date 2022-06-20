import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './style';
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
  const firstLoadCheckRef = useRef(false);

  useEffect(() => {
    if (!user && firstLoadCheckRef.current) {
      alert(`로그인하셔야 이용할 수 있습니다.`);
      navigate(`/`);
    }
    firstLoadCheckRef.current = true;
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

      <Style.SubmitContainer>
        <Style.SubmitButton onClick={handleRegister}>등록하기</Style.SubmitButton>
      </Style.SubmitContainer>
    </Layout>
  );
};

export default CreateReview;
