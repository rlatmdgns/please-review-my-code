import styled from 'styled-components';

export const SubmitContainer = styled.div`
  margin: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  :hover,
  :focus {
    background-color: #07c;
  }

  :focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  :active {
    background-color: #0064bd;
  }
`;
