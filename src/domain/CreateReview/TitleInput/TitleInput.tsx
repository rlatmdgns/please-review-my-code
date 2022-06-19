import React from 'react';
import useInput from '../../../utils/hooks/useInput';
import * as Style from './style';

const TitleInput = () => {
  const [title, handleTitleChange] = useInput('');
  return (
    <Style.Wrapper>
      <Style.Input type="text" placeholder="제목을 입력하세요." value={title} onChange={handleTitleChange} />
    </Style.Wrapper>
  );
};

export default TitleInput;
