import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Box, FlexBox, FlexCenter } from 'styles/theme';

interface Code {
  children: string;
}

const CodeBlock = (props: Code) => {
  const { children } = props;
  console.log(children);
  const [index, setIndex] = useState<number>();
  const [clickedLine, setClickedLine] = useState(false);
  // const [renderTextArea, setRenderTextArea] = useState(false);

  const handleLineClick = (idx: number) => {
    setIndex(idx);
    setClickedLine(true);
  };

  const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      {children.split('\n').map((code, idx) => {
        if (!code) return;
        return (
          <>
            <CodeLine onClick={() => handleLineClick(idx)}>
              <CodeContent>
                <PlusBtn>+</PlusBtn>&nbsp;
                <CodeArea>{code}</CodeArea>
              </CodeContent>
            </CodeLine>
            {index === idx && clickedLine && (
              <ReviewForm onSubmit={(e: FormEvent<HTMLFormElement>) => handleReviewSubmit(e)}>
                <ReviewTextArea placeholder="리뷰를 입력하세요.." cols={40} />
                <ConfirmBtn>리뷰등록</ConfirmBtn>
              </ReviewForm>
            )}
          </>
        );
      })}
    </div>
  );
};

const PlusBtn = styled(FlexCenter)`
  padding: 2px;
  border: 1px solid #8e8e8e;
  font-size: 28px;
  font-weight: 600;
`;

const CodeLine = styled.div`
  box-sizing: border-box;
  padding: 20px 8px;
  border-bottom: 1px solid #8e8e8e;
  cursor: pointer;

  &:active {
    ${PlusBtn} {
      border: 1px solid ${({ theme }) => theme.color.black};
    }
  }

  &:hover {
    background-color: #51ca71;
  }
`;

const CodeContent = styled(FlexBox)`
  height: 24px;
`;

const CodeArea = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ReviewForm = styled.form``;

const ReviewTextArea = styled.textarea`
  font-size: 18px;
`;

const ConfirmBtn = styled.button`
  padding: 4px 8px;
  border: none;
  background: #c4c4c4;
  border-radius: 4px;
`;

export default CodeBlock;
