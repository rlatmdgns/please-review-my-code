import React from 'react';
import { Tag } from './Tag';
import { TitleInput } from './TitleInput';
import { Editor } from './Editor';

const CreateReview = () => {
  return (
    <div>
      <TitleInput />
      <Tag />
      <Editor />
    </div>
  );
};

export default CreateReview;
