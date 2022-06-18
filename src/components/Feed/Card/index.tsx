import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';
import * as Style from './styles';

export const Card = () => {
  return (
    <Style.Wrapper>
      <Style.Like>하트</Style.Like>
      <Style.Category>디버깅</Style.Category>
      <Style.Title>훅 작성을했는데 올바르게 사용한걸까요?</Style.Title>
      <Style.Labels>
        <Style.Label>#React</Style.Label>
        <Style.Label>#JS</Style.Label>
      </Style.Labels>
      <Style.Date>2022.06.18</Style.Date>
      <Style.Divider></Style.Divider>
      <Style.BottomContainer>
        <Style.Left>
          <Style.Writer>dhrod0325</Style.Writer>
        </Style.Left>
        <FlexBox>
          <Style.Views>20</Style.Views>
          <Style.Comments>20</Style.Comments>
        </FlexBox>
      </Style.BottomContainer>
    </Style.Wrapper>
  );
};
