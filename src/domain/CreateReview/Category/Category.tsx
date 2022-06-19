import { useState } from 'react';
import * as Style from './style';
import { useAtom } from 'jotai';
import { CATEGORY_ATOM } from 'store';

const Category = () => {
  const [, setCategory] = useAtom(CATEGORY_ATOM);
  const [btnIdx, setBtnIdx] = useState(0);
  const categoryArray: string[] = ['디버깅', '클린코드', '아키텍처'];

  const handleClick = (idx: number, value: string) => {
    setBtnIdx(idx);
    setCategory(value);
  };

  return (
    <Style.Wrapper>
      {categoryArray.map((value: string, idx: number) =>
        btnIdx === idx ? (
          <Style.SelectButton key={idx} onClick={() => handleClick(idx, value)}>
            {value}
          </Style.SelectButton>
        ) : (
          <Style.Button key={idx} onClick={() => handleClick(idx, value)}>
            {value}
          </Style.Button>
        ),
      )}
    </Style.Wrapper>
  );
};

export default Category;
