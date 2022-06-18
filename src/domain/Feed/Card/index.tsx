import { FlexBox, FlexBoxRight, Divider, Box } from 'styles/theme';
import * as Style from './styles';
import { Labels, Wrapper, BottomContainer, Category, Title, Label, Date } from './styles';

export const Card = () => {
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
        <FlexBox>
          <Style.Writer>아이디</Style.Writer>
        </FlexBox>
        <FlexBoxRight>
          <Style.Like>💙</Style.Like>
          <Box width="10px" />
          <Style.Comments>💬</Style.Comments>
        </FlexBoxRight>
      </BottomContainer>
    </Wrapper>
  );
};
