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
  padding: 0;
  list-style: none;
`;

export const TagItem = styled.li`
  padding: 5px 10px;
  border-radius: 20px;
  background: #eee;
  color: #6667ab;
  font-weight: 500;
  & + & {
    margin-left: 10px;
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
