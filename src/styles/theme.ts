import styled from 'styled-components';

export const theme = {

}

export const FlexBox = styled.div`
  display: flex;
  `;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;