import { FlexBox, FlexCenter, FlexColumn } from 'styles/theme';
import styled from 'styled-components';

export const Wrapper = styled(FlexColumn)`
  max-width: 1080px;
  border: 1px solid black;
  padding: 50px;
`;

export const Profile = styled.div`
  width: 48px;
  height: 48px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const Category = styled(FlexCenter)`
  padding: 6px 12px;
  color: ${({ theme }) => theme.color.white};
  background: #07c;
  border-radius: 8px;
`;

export const ProfileContainer = styled(FlexColumn)`
  justify-content: space-around;
`;

export const Name = styled.div`
  font-size: 18px;
`;

export const Created = styled.div`
  font-size: 14px;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

export const Label = styled.span`
  display: block;
  padding: 8px 14px;
  font-size: 14px;
  background-color: #07c;
`;
export const Content = styled.div`
  min-height: 400px;
  border: 1px solid black;
`;
export const CodeBlockContainer = styled(FlexBox)`
  > :nth-child(1) {
    flex: 2;
    border: 1px solid black;
  }

  > :nth-child(3) {
    flex: 1;
    border: 1px solid black;
  }
`;
export const CodeComments = styled.div``;

export const CommentContainer = styled(FlexColumn)`
  height: 300px;
  border: 1px solid black;
`;
