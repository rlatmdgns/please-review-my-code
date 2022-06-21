import { HonorType } from '../../index';
import { ListItem } from '../ListItem/ListItem';
import { Container, ItemContainer } from './List.style';

type Props = {
  items: HonorType[];
};

export const List = ({ items }: Props) => {
  return (
    <Container>
      {items.map((item, idx) => (
        <ItemContainer key={idx}>
          <ListItem item={item} />
        </ItemContainer>
      ))}
    </Container>
  );
};
