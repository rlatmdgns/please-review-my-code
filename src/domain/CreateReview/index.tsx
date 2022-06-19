import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
import { Editor } from './Editor';
import { Layout } from '../../components/common/Layout';
import { OnChangeType } from './Editor/Editor';

import { Editor as ToastUI } from './Editor';
// import { TagInput } from './TagInput';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Layout } from 'components/common/Layout';

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
      {/* <TagInput /> */}
      {/* <ContentInput /> */}
      <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
    </Layout>
  );
};

export default CreateReview;
