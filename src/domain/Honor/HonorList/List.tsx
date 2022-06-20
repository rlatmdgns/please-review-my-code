import styled from 'styled-components';
import { HonorType } from '../index';
import { ListItem } from './ListItem';

type Props = {
  items: HonorType[];
};

export const List = ({ items }: Props) => {
  return (
    <Container>
      {items.map((item, idx) => (
        <ItemContainer>
          <ListItem key={idx} item={item} />
        </ItemContainer>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const ItemContainer = styled.li``;
