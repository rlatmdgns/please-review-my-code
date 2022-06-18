import { Box, FlexBox, FlexColumnCenter, Divider } from 'styles/theme';
import CodeBlock from './CodeBlock';
import CodeComment from './CodeComment';
import Comment from './Comment';
import * as Style from './style';

const Detail = () => {
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
          <Style.Created>2022.04.12</Style.Created>
        </FlexColumnCenter>
      </FlexBox>
      <Box height="20px"></Box>
      <Style.Title>타이틀</Style.Title>
      <Box height="20px"></Box>
      <FlexBox gap={10}>
        <Style.Label>Label1</Style.Label>
        <Style.Label>Label2</Style.Label>
        <Style.Label>Label3</Style.Label>
      </FlexBox>
      <Box height="10px"></Box>
      <Divider />
      <Box height="10px"></Box>
      <Style.Content>글글글글</Style.Content>
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
