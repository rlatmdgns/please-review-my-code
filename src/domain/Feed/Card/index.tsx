import { FlexBox, FlexCenter, Divider, Box } from 'styles/theme';
import * as Style from './styles';

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
        <FlexBox>
          <Style.Writer>아이디</Style.Writer>
        </FlexBox>
        <FlexCenter>
          <Style.Like>💙</Style.Like>
          <Box width="10px" />
          <Style.Comments>💬</Style.Comments>
        </FlexCenter>
      </Style.BottomContainer>
    </Style.Wrapper>
  );
};
