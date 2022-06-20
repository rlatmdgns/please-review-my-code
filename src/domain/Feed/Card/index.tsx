import { FlexBox, FlexCenter, Divider, Box, Text } from 'styles/theme';
import * as Style from './styles';
import { Labels, Category, Title, Label, Date } from './styles';
import { PostType } from 'utils/firebase/db';

export const Card = (props: { card: PostType }) => {
  const { title, authorInfo, tags, editDate, category } = props.card;

  const formatDate = () => {
    return editDate.toDate().toLocaleDateString('ko-KR');
  };

  return (
    <Style.Wrapper>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Labels>
        {/* {tags.map((tag) => (
          <Label>#{tag}</Label>
        ))} */}
      </Labels>
      <Date>{formatDate()}</Date>
      <Divider height="1px" marginBottom="24px" />
      <Style.Info>
        <FlexBox>
          <Text size="12px">{authorInfo?.displayName}</Text>
        </FlexBox>
        <FlexCenter>
          <Text size="12px">💙</Text>
          <Box width="12px" />
          <Text size="12px">💬</Text>
        </FlexCenter>
      </Style.Info>
    </Style.Wrapper>
  );
};
