import styled from 'styled-components';
import { HonorType } from '../index';
import { List } from './List';

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

const Container = styled.div`
  margin: 40px 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
`;
