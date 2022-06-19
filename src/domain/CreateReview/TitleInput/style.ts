import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 20px;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px;
  border: 1px solid #dedede;
  font-size: 1.4rem;
  font-weight: 700;
  color: #313a46;
  letter-spacing: 3px;

  &::placeholder {
    color: #313a46;
  }
`;
