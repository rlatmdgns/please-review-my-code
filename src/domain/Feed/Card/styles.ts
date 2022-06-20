import styled from 'styled-components';
import { FlexBox } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 320px;
  min-height: 350px;
  padding: 40px 32px;
  border: 1px solid #dedede;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
`;

export const Category = styled.p`
  font-size: 14px;
  margin-bottom: 18px;
`;

export const Title = styled.h2`
  min-height: 30px;
  font-size: 22px;
  margin-bottom: 36px;
`;

export const Labels = styled(FlexBox)`
  > *:not(:last-child) {
    margin-right: 12px;
  }

  margin: 24px 0;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.color.gray};
  margin-bottom: 24px;
`;

export const Info = styled(FlexBox)`
  justify-content: space-between;
`;
