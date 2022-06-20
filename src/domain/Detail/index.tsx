import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Style from './style';
import Comment from './Comment';
import CodeBlock from './CodeBlock';
import { fbService } from 'utils/firebase/db';
import { Box, FlexBox, FlexColumnCenter, Divider } from 'styles/theme';

const Detail = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState<any>({
    author: '',
    category: '',
    code: '',
    content: '',
    date: '',
    tag: [],
    title: '',
  });

  useEffect(() => {
    (async () => {
      if (id === undefined) return;
      const data = await fbService.getPostById(id);
      setPostData({
        author: data.author,
        category: data.category,
        code: data.code,
        content: data.content,
        date: data.date,
        tag: data.tag,
        title: data.title,
      });
      console.log(data);
    })();
  }, [id]);

  const { author, category, code, content, date, tag, title } = postData;

  return (
    // <Style.Wrapper to={`/detail/${id}`}>
    <Style.Wrapper>
      <FlexBox>
        <Style.Profile>
          <img src="https://miro.medium.com/fit/c/66/66/0*npdL-nkO1eSZItis.jpg" alt="profile" />
        </Style.Profile>
        <Box width="16px" />

        <FlexBox gap={10}>{category}</FlexBox>
        <Box height="20px"></Box>

        <FlexColumnCenter>
          <Style.Name>{author}</Style.Name>
          <Box height="8px"></Box>
          <Style.Created>{date}</Style.Created>
        </FlexColumnCenter>
      </FlexBox>
      <Box height="20px"></Box>

      <Style.Title>{title}</Style.Title>
      <Box height="20px"></Box>
      <FlexBox gap={10}>
        {/* {tag.map((t: string) => (
          <Style.Label>{t}</Style.Label>
        ))} */}
      </FlexBox>

      <Box height="10px"></Box>
      <Divider />
      <Box height="10px"></Box>

      <Style.Content>{content}</Style.Content>
      <Box height="20px"></Box>

      <Style.CodeBlockContainer>
        <CodeBlock postId={id}>{code}</CodeBlock>
        <Box width="20px"></Box>
      </Style.CodeBlockContainer>
      <Box height="20px"></Box>

      <Style.CommentContainer>
        <Comment></Comment>
      </Style.CommentContainer>
    </Style.Wrapper>
  );
};

export default Detail;
