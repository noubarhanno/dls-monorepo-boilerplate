// specify in tsconfig.json: "jsx": "react-jsx" so import React is not needed
import React from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  color: red;
  padding: 4px;
  border: 1px solid black;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
