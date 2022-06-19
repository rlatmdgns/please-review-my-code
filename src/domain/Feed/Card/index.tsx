import { FlexBox, FlexCenter, Divider, Box } from 'styles/theme';
import * as Style from './styles';
import { Labels, Wrapper, BottomContainer, Category, Title, Label, Date } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../utils/firebase';
import { ICard } from 'utils/types/post';

interface CardProps {
  tag: string;
}

export const Card = (props: { card: ICard }) => {
  const { title, tag, date, category, user } = props.card;
  // const user = useContext(AuthContext);

  return (
    // <Style.Wrapper to="/detail/">
    <Style.Wrapper>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Labels>
        {tag.map((t) => (
          <Label>#{t}</Label>
        ))}
      </Labels>
      <Date>{date}</Date>
      <Divider />
      <Style.BottomContainer>
        <FlexBox>
          <Style.Writer>{user}</Style.Writer>
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
