import { FlexBox, FlexCenter, Divider, Box } from 'styles/theme';
import * as Style from './styles';
import { Labels, Category, Title, Label, Date } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../utils/firebase';

export const Card = () => {
  const user = useContext(AuthContext);

  return (
    <Style.Wrapper>
      <Category>디버깅</Category>
      <Title>이거 맞나요? 왜 안되죠? 살려주세요</Title>
      <Labels>
        <Label>#React</Label>
        <Label>#JS</Label>
      </Labels>
      <Date>2022.06.18</Date>
      <Divider />
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
