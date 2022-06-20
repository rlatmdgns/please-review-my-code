import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { Header } from './Header';
import { FlexBox } from 'styles/theme';

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <FlexBox>
      <Sidebar />
      <FlexItem>
        <Header />
        {props.children}
      </FlexItem>
    </FlexBox>
  );
};

const FlexItem = styled.div`
  flex-grow: 1;
  padding: 40px 80px;
  background: #f8f9fa;
`;
