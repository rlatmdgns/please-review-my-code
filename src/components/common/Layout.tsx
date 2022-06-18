import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <>
      <FlexBox>
        <Sidebar />
        <FlexItem>{props.children}</FlexItem>
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
`;
