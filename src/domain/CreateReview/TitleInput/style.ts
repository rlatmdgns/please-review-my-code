import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #dedede;
  margin: 10px 20px 20px;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  color: #313a46;
  letter-spacing: 3px;

  &::placeholder {
    color: #313a46;
  }
`;
