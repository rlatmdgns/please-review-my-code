import { HonorType } from '../index';
import { List } from './List/List';
import { Container, Title } from './styles';

type Props = {
  title: string;
  items: HonorType[];
};

export const HonorList = ({ title, items }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List items={items} />
    </Container>
  );
};
