import React from 'react';
import { useAtom } from 'jotai';
import * as Style from './style';
import { TITLE_ATOM } from 'store';

const TitleInput = () => {
  const [titleAtom, setTitleAtom] = useAtom(TITLE_ATOM);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitleAtom(event.target.value);

  return (
    <Style.Wrapper>
      <Style.Input type="text" placeholder="제목을 입력하세요." value={titleAtom} onChange={handleChange} />
    </Style.Wrapper>
  );
};

export default TitleInput;
