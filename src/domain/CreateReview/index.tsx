import React from 'react';
import { TagInput } from './TagInput';
import { TitleInput } from './TitleInput';
import { Layout } from '../../components/common/Layout';
import { Editor } from './Editor';

const CreateReview = () => {
  return (
    <Layout>
      <TitleInput />
      <Editor />
      <TagInput />
    </Layout>
  );
};

export default CreateReview;
