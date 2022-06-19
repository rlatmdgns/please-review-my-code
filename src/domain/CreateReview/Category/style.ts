import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 20px;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
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
    box-shadow: none;
  }
`;

export const SelectButton = styled(Button)`
  background-color: #07c;
`;
