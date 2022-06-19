import { FlexBox, FlexBoxRight, Divider, Box } from 'styles/theme';
import * as Style from './styles';
<<<<<<< HEAD

export const Card = () => {
  return (
    <Style.Wrapper>
      <Box height="20px" />
      <Style.Category>디버깅</Style.Category>
      <Box height="16px" />
      <Style.Title>이거 맞나요? 왜 안되죠? 살려주세요</Style.Title>
      <Box height="16px" />
      <Style.Labels>
        <Style.Label>#React</Style.Label>
        <Style.Label>#JS</Style.Label>
      </Style.Labels>
      <Box height="30px" />
      <Style.Date>2022.06.18</Style.Date>
      <Box height="8px" />
      <Divider></Divider>
      <Box height="6px" />
      <Style.BottomContainer>
=======
import { Labels, Wrapper, BottomContainer, Category, Title, Label, Date } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../utils/firebase';

export const Card = () => {
  const user = useContext(AuthContext);

  return (
    <Wrapper>
      <Category>디버깅</Category>
      <Title>이거 맞나요? 왜 안되죠? 살려주세요</Title>
      <Labels>
        <Label>#React</Label>
        <Label>#JS</Label>
      </Labels>
      <Date>2022.06.18</Date>
      <Divider />
      <BottomContainer>
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
        <FlexBox>
          <Style.Writer>아이디</Style.Writer>
        </FlexBox>
        <FlexBoxRight>
          <Style.Like>💙</Style.Like>
          <Box width="10px" />
          <Style.Comments>💬</Style.Comments>
        </FlexBoxRight>
<<<<<<< HEAD
      </Style.BottomContainer>
    </Style.Wrapper>
=======
      </BottomContainer>
    </Wrapper>
>>>>>>> 1fb2a9b1acad2c2cf4c72a7a14f1cf78d70738a4
  );
};
