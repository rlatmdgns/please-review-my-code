import React from 'react';
import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
import { Editor } from './Editor';
import { Layout } from '../../components/common/Layout';
import { OnChangeType } from './Editor/Editor';

const CreateReview = () => {
  function handleEditorChanged(editorContent: OnChangeType) {
    console.log(editorContent);
  }

  return (
    <Layout>
      <TitleInput />
      <Tag />
      <Editor onChange={handleEditorChanged} />
    </Layout>
  );
};

export default CreateReview;
