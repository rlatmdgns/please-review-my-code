import { Layout } from 'components/common/Layout';
import { useContext } from 'react';
import { AuthContext } from 'utils/firebase';

import { TitleInput } from './TitleInput';
import { Tag } from './Tag';
import { Category } from './Category';
import { Editor } from './Editor';

import { useAtom } from 'jotai';
import { POST_SEND_ATOM } from 'store';

const CreateReview = () => {
  const user = useContext(AuthContext);
  const [, sendPost] = useAtom(POST_SEND_ATOM);

  function handleRegister() {
    if (!user || Object.hasOwnProperty.call(user, 'uid') === false) return;
    sendPost(user.uid);
  }
  return (
    <Layout>
      <TitleInput />
      <Category />
      <Tag />
      <Editor />
      <button onClick={handleRegister}>등록하기</button>
    </Layout>
  );
};

export default CreateReview;
