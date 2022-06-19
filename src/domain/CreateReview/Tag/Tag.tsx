import React, { useState, useContext } from 'react';
import useInput from '../../../utils/hooks/useInput';
import * as Style from './style';
import { EditorContext, EditorProvider } from '../../../context/EditorContext';

const Tag = () => {
  const { tag, tags, handleKeyDown, handleTagChange } = useContext(EditorContext);
  console.log(handleKeyDown);
  return (
    <EditorProvider>
      <Style.Wrapper>
        <Style.TagList>
          {tags?.map((tagItem: string) => {
            return <Style.TagItem key={tagItem}>{tagItem}</Style.TagItem>;
          })}
        </Style.TagList>
        <Style.Input
          type="text"
          placeholder="태그를 입력하세요.(입력 후 Enter를 눌러주세요.)"
          value={tag}
          onKeyDown={handleKeyDown}
          onChange={handleTagChange}
        />
      </Style.Wrapper>
    </EditorProvider>
  );
};

export default Tag;
