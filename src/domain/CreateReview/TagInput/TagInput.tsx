import React from 'react';
import useInput from '../../../utils/hooks/useInput';
import * as Style from './style';

const TagInput = () => {
  const tag = useInput('');
  return (
    <Style.Wrapper>
      <Style.Input type="text" placeholder="태그를 입력하세요." {...tag} />
    </Style.Wrapper>
  );
};

export default TagInput;
