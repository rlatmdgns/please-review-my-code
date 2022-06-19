import React, { createContext, useState } from 'react';
import useInput from '../utils/hooks/useInput';

type EditorContextType = {
  tag: string;
  tags: string[];
};
const EditorContext = createContext({
  tag: '',
  tags: [],
  handleTagChange: (event: React.ChangeEvent<HTMLElement>) => {},
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {},
});

interface EditorProviderProps {
  children: JSX.Element | JSX.Element[];
}

const EditorProvider = ({ children }: EditorProviderProps) => {
  const [tag, handleTagChange, setTag] = useInput('');
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const TAG_MAX_LENGTH = 11;
    const TAG_EVENT_KEY = 'Enter';

    if (!tag) return;
    if (tags.length > TAG_MAX_LENGTH) return setTag('');
    if (event.key === TAG_EVENT_KEY) {
      setTags([...tags, tag]);
      setTag('');
      return;
    }
  };

  return (
    <EditorContext.Provider
      value={{
        tag,
        tags,
        handleTagChange,
        handleKeyDown,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
export { EditorContext, EditorProvider };
