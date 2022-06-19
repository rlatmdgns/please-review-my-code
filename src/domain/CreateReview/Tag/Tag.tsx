import React, { useState } from 'react';
import useInput from '../../../utils/hooks/useInput';
import * as Style from './style';

const Tag = () => {
  const [tag, handleTagChange, setTag] = useInput('');
  const [tags, setTags] = useState<string[]>([]);

  const TAG_MAX_LENGTH = 11;
  const TAG_EVENT_KEY = 'Enter';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!tag) return;
    if (tags.length > TAG_MAX_LENGTH) return setTag('');
    if (event.key === TAG_EVENT_KEY) {
      setTags([...tags, tag]);
      setTag('');
      return;
    }
  };
  return (
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
  );
};

export default Tag;
