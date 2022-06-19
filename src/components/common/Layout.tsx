import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <>
      <FlexBox>
        <Sidebar />

        <FlexItem>
          <Header />
          {props.children}
        </FlexItem>
      </FlexBox>
    </>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

const FlexItem = styled.div`
  flex-grow: 1;
  padding: 20px;
  background: #F8F9FA;
`;
