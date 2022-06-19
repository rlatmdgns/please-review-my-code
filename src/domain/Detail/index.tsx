import { Box, FlexBox, FlexColumnCenter, Divider } from 'styles/theme';
import { useParams } from 'react-router-dom';
import { Post } from 'utils/types/post';
import CodeBlock from './CodeBlock';
import CodeComment from './CodeComment';
import Comment from './Comment';
import * as Style from './style';
import { useEffect, useState, useLayoutEffect } from 'react';

import { db } from 'utils/firebase/db/db';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';

async function myTest() {
  try {
    const result: any[] = [];
    const q = await query(collection(db, 'posts'));
    const posts = await getDocs(q);
    posts.forEach((doc) => result.push({ id: 0, ...doc.data() }));
    return result[0];
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

const Detail = ({ title, content, tag, category, date, comment }: Post) => {
  const { id } = useParams();
  const [postData, setPostData] = useState<any>({
    author: '1',
    category: '1',
    code: '1',
    content: '1',
    date: '1',
    tag: ['1'],
    title: '1',
  });

  useEffect(() => {
    (async () => {
      const data = await myTest();
      console.log(data);
      setPostData({
        author: data.author,
        category: data.category,
        code: 'function test(){\n    console.log(1)\n}\n',
        content: '<p>jjljkljljkljljkljkljlkjkljㅌㅋㅌㅇㅁㄴㅇㅁ</p>',
        date: '2020-05-12',
        tag: [data.tag],
        title: data.title,
      });
    })();
  }, []);

  return (
    <Style.Wrapper>
      <FlexBox>
        <Style.Profile>
          <img src="https://miro.medium.com/fit/c/66/66/0*npdL-nkO1eSZItis.jpg" alt="profile" />
        </Style.Profile>
        <Box width="16px" />
        <FlexColumnCenter>
          <Style.Name>{postData.author}</Style.Name>
          <Box height="8px"></Box>
          <Style.Created>{postData.date}</Style.Created>
        </FlexColumnCenter>
      </FlexBox>
      <Box height="20px"></Box>
      <Style.Title>{postData.title}</Style.Title>
      <Box height="20px"></Box>
      <FlexBox gap={10}>
        {postData.tag.map((t: string, idx: number) => (
          <Style.Label key={idx}>{t}</Style.Label>
        ))}
      </FlexBox>
      <Box height="10px"></Box>
      <Divider />
      <Box height="10px"></Box>
      <Style.Content>{postData.content}</Style.Content>
      <Box height="20px"></Box>
      <Style.CodeBlockContainer>
        <CodeBlock></CodeBlock>
        <Box width="20px"></Box>
        <Style.CodeComments>
          <CodeComment></CodeComment>
        </Style.CodeComments>
      </Style.CodeBlockContainer>
      <Box height="20px"></Box>
      <Style.CommentContainer>
        <Comment></Comment>
      </Style.CommentContainer>
    </Style.Wrapper>
  );
};

export default Detail;
