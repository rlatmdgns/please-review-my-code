import { Box, FlexBox, FlexColumnCenter, Divider } from 'styles/theme';
import { useParams } from 'react-router-dom';
import { Post } from 'utils/types/post';
import CodeBlock from './CodeBlock';
import CodeComment from './CodeComment';
import Comment from './Comment';
import * as Style from './style';
import { useEffect, useState } from 'react';

function getPostData(id: number): Promise<Post> {
  const dummyData: Post[] = [
    {
      title: '타이틀타이틀',
      content: '<p>jjljkljljkljljkljkljlkjkljㅌㅋㅌㅇㅁㄴㅇㅁ</p>',
      code: 'function test(){\n    console.log(1)\n}\n',
      tag: ['tag1', 'tag2'],
      category: '디버깅',
      date: '2020-03-14',
    },

    {
      title: '타이틀타이틀2',
      content: '<p>jjljkljljkljljkljkljlkjkljㅌㅋㅌㅇㅁㄴㅇㅁ</p>',
      code: 'function test(){\n    console.log(1)\n}\n',
      tag: ['tag1', 'tag2'],
      category: '디버깅',
      date: '2020-03-14',
    },
  ];

  return new Promise((resolve) => resolve(dummyData[id]));
}

const Detail = ({ title, content, tag, category, date, comment }: Post) => {
  const { id } = useParams();

  return (
    <Style.Wrapper>
      <FlexBox>
        <Style.Profile>
          <img src="https://miro.medium.com/fit/c/66/66/0*npdL-nkO1eSZItis.jpg" alt="profile" />
        </Style.Profile>
        <Box width="16px" />
        <FlexColumnCenter>
          <Style.Name>name</Style.Name>
          <Box height="8px"></Box>
          <Style.Created>{date}</Style.Created>
        </FlexColumnCenter>
      </FlexBox>
      <Box height="20px"></Box>
      <Style.Title>{title}</Style.Title>
      <Box height="20px"></Box>
      <FlexBox gap={10}>
        {tag?.map((t) => (
          <Style.Label>{t}</Style.Label>
        ))}
      </FlexBox>
      <Box height="10px"></Box>
      <Divider />
      <Box height="10px"></Box>
      <Style.Content>{content}</Style.Content>
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
