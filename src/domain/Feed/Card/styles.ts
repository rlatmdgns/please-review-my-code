import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';

export const Wrapper = styled(FlexColumn)`
  width: 200px;
  border: 1px solid #dedede;
  padding: 20px;
  flex: 1 1 30%;
  background: #fff;
`;

export const Category = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 150%;
`;

export const Labels = styled(FlexBox)`
  > *:not(:last-child) {
    margin-right: 10px;
  }

  margin: 20px 0;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Date = styled.p`
  font-size: 8px;
  margin-bottom: 10px;
`;

export const BottomContainer = styled(FlexBox)`
  justify-content: space-between;
  margin-top: 10px;
`;
export const Left = styled.div``;
export const Writer = styled.div`
  font-size: 12px;
`;
export const Right = styled.div``;
export const Views = styled.div``;
export const Like = styled.div`
  font-size: 12px;
`;
export const Comments = styled.div`
  font-size: 12px;
`;
