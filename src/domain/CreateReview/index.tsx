import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
<<<<<<< HEAD
import { Editor as ToastUI } from './Editor';
// import { TagInput } from './TagInput';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Layout } from 'components/common/Layout';
=======
import { Editor } from './Editor';
import { Layout } from '../../components/common/Layout';
import { OnChangeType } from './Editor/Editor';
import { Editor as ToastUI } from './Editor';
>>>>>>> main

const CreateReview = () => {
  function handleEditorChanged(editorContent: OnChangeType) {
    console.log(1, editorContent);
  }

  return (
    <Layout>
      <TitleInput />
      <Tag />
<<<<<<< HEAD
      <ToastUI />
      {/* <TagInput /> */}
      {/* <ContentInput /> */}
      <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
=======
      <Editor onChange={handleEditorChanged} />
      <ToastUI />
>>>>>>> main
    </Layout>
  );
};

export default CreateReview;
