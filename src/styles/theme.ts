import styled from 'styled-components';

export const theme = {
  color: {
    primary: '#6667ab',
    white: '#ffffff',
  },
};

export const Box = styled.div<{ width?: string; height?: string }>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexBoxRight = styled(FlexBox)`
  align-items: center;
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 3px solid #bb;
  margin: 0px;
`;
