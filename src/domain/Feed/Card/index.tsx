import { FlexBox, FlexCenter, Divider, Box } from 'styles/theme';
import * as Style from './styles';
import { Labels, Category, Title, Label, Date } from './styles';
import { PostType } from 'utils/firebase/db';

export const Card = (props: { card: PostType }) => {
  const { title, tags, editDate, category, author } = props.card;

  return (
    <Style.Wrapper>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Labels>
        {/* {tags.map((tag) => (
          <Label>#{tag}</Label>
        ))} */}
      </Labels>
      <Date>{editDate.toString()}</Date>
      <Divider />
      <Style.BottomContainer>
        <FlexBox>
          <Style.Writer>{author}</Style.Writer>
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
