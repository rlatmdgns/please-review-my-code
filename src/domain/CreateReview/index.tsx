import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
import { Editor as ToastUI } from './Editor';
// import { TagInput } from './TagInput';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Layout } from 'components/common/Layout';

const CreateReview = () => {
  return (
    <Layout>
      <TitleInput />
      <Tag />
      <ToastUI />
      {/* <TagInput /> */}
      {/* <ContentInput /> */}
      <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
    </Layout>
  );
};

export default CreateReview;
