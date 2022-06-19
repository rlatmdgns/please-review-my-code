import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
import { Editor } from './Editor';
import { Layout } from '../../components/common/Layout';
import { OnChangeType } from './Editor/Editor';
import { Editor as ToastUI } from './Editor';

const CreateReview = () => {
  function handleEditorChanged(editorContent: OnChangeType) {
    console.log(1, editorContent);
  }

  return (
    <Layout>
      <TitleInput />
      <Tag />
      <Editor onChange={handleEditorChanged} />
      <ToastUI />
    </Layout>
  );
};

export default CreateReview;
