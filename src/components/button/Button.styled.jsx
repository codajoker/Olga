import styled from "styled-components";

export const PageButton = styled.button`
  width: 100px;

  border-radius: 4px;
  border: 1px solid #07cd00;
  background: linear-gradient(0deg, #07cd00 0%, #f0ff04 100%);
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  :hover,
  :focus {
    color: #f1f5f2;
    background: linear-gradient(0deg, #fd0000 0%, #ffd209 100%);
  }
`;
