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

export const FlexBox = styled.div<{ gap?: number }>`
  display: flex;

  > :not(:last-child) {
    margin-right: ${(props) => props.gap}px;
  }
`;

FlexBox.defaultProps = {
  gap: 0,
};

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
  justify-content: center;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid #8e8e8e;
  margin: 0px;
`;
