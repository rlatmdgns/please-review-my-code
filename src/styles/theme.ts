import styled from 'styled-components';

export interface ThemeType {
  color: object;
}

export const theme: ThemeType = {
  color: {
    primary: '#313a46',
    gray: '#8391a2',
    lightgray: '#e7e7e7',
    white: '#ffffff',
    black: '#333333',
  },
};

export const Box = styled.div<{ width?: string; height?: string }>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
`;

export const Text = styled.p<{ size: string; weight?: string }>`
  ${(props) => props.size && `font-size: ${props.size}`};
  ${(props) => props.weight && `font-weight: ${props.weight}`};
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

export const Divider = styled.div<{ height: string; marginBottom?: string }>`
  width: 100%;
  height: ${(props) => props.height};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
`;
