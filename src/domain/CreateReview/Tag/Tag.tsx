import React, { useState, useContext } from 'react';
import useInput from '../../../utils/hooks/useInput';
import * as Style from './style';
import { EditorContext, EditorProvider } from '../../../context/EditorContext';
import { useAtom } from 'jotai';
import { TAGS_ATOM } from 'store';

const Tag = () => {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useAtom(TAGS_ATOM);

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => setTagInput(event.target.value);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const TAG_MAX_LENGTH = 11;
    const TAG_EVENT_KEY = 'Enter';

    if (!tagInput) return;
    if (tags.length > TAG_MAX_LENGTH) return setTagInput('');
    if (event.key === TAG_EVENT_KEY) {
      setTags([...tags, tagInput]);
      setTagInput('');
      return;
    }
  };

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
          value={tagInput}
          onKeyDown={handleKeyDown}
          onChange={handleTagChange}
        />
      </Style.Wrapper>
    </EditorProvider>
  );
};

export default Tag;
