import styled from 'styled-components';
import { FlexBox, FlexColumn } from 'styles/theme';

export const Wrapper = styled(FlexColumn)`
  width: 200px;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 20px;
`;

export const Category = styled.p`
  font-size: 12px;
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 1.5rem;
`;

export const Labels = styled(FlexBox)`
  > *:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Label = styled.span`
  font-size: 12px;
`;

export const Date = styled.p`
  font-size: 8px;
`;
export const BottomContainer = styled(FlexBox)`
  justify-content: space-between;
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
