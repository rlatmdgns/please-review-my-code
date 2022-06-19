import React from 'react';
import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
import { Editor } from './Editor';
import { Layout } from '../../components/common/Layout';
const CreateReview = () => {
  return (
    <Layout>
      <TitleInput />
      <Tag />
      <Editor />
    </Layout>
  );
};

export default CreateReview;
