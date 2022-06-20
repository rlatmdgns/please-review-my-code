import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FlexBox, FlexCenter } from 'styles/theme';
import { AuthContext } from 'utils/firebase';
import { fbService } from 'utils/firebase/db';

interface Code {
  postId: string | undefined;
  children: string;
}

const CodeBlock = (props: Code) => {
  const { postId, children } = props;
  const [index, setIndex] = useState<number>(1);
  const [clickedLine, setClickedLine] = useState(false);
  const [comment, setComment] = useState({
    name: '',
    content: '',
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleLineClick = (idx: number) => {
    setIndex(idx);
    setClickedLine(true);
  };

  const user = useContext(AuthContext);

  const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setComment({
      name: (user && user.displayName) || '',
      content: `${textareaRef.current?.value}`,
    });
    setClickedLine(false);
  };

  useEffect(() => {
    // console.log(comment);
    fbService.createComment({
      author: comment.name,
      content: comment.content,
      postId: postId || '',
      parentId: '',
      regDate: new Date(),
    });
  }, [comment, postId]);

  return (
    <div>
      {children.split('\n').map((code, idx) => {
        // if (!code) return;
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
                <ReviewTextArea
                  placeholder="리뷰를 입력하세요.."
                  autoFocus
                  rows={8}
                  cols={50}
                  required
                  ref={textareaRef}
                />
                <ConfirmBtn type="submit">리뷰등록</ConfirmBtn>
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

const ReviewForm = styled.form`
  text-align: right;
`;

const ReviewTextArea = styled.textarea`
  padding: 12px 8px;
  font-size: 18px;
`;

const ConfirmBtn = styled.button`
  padding: 10px 14px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.lightgray};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.white};
  }
`;

export default CodeBlock;
