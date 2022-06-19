import { FlexBox, FlexColumn } from 'styles/theme';
import styled from 'styled-components';

export const Wrapper = styled(FlexColumn)`
  max-width: 1080px;
  border: 1px solid black;
  padding: 50px;
  * {
    1px solid black;
  }
`;

export const Profile = styled.div`
  width: 48px;
  height: 48px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const ProfileContainer = styled(FlexColumn)`
  justify-content: space-around;
`;

export const Name = styled.div`
  font-size: 16px;
`;

export const Created = styled.div`
  font-size: 14px;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

export const Label = styled.span`
  font-size: 14px;
`;
export const Content = styled.div`
  height: 200px;
  border: 1px solid black;
`;
export const CodeBlockContainer = styled(FlexBox)`
  height: 300px;

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
