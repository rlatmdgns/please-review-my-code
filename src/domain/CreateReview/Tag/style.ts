import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid #dedede;
  margin: 2px 20px 20px;
`;

export const TagList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
  background: #fff;
`;

export const TagItem = styled.li`
  padding: 5px 10px;
  font-weight: 500;
  cursor: pointer;
  margin: 0 10px;
  min-width: 50px;
  text-align: center;
  border: 1px solid #dedede;
  background: #fff;
  color: #333;

  &:hover {
    background: #313a46;
    color: #fff;
  }
`;

export const Input = styled.input`
  position: relative;
  flex: 1;
  border: 0;
  font-size: 1rem;
  font-weight: bold;
  padding: 20px;
  color: #4e4e6b;
  &::placeholder {
    color: #4e4e6b;
  }
`;
