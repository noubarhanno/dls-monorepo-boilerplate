// specify in tsconfig.json: "jsx": "react-jsx" so import React is not needed
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  color: green;
  padding: 6px;
  border: 2px solid green;
  background-color: blue;
`;

export function Button({ onClick }: ButtonProps): JSX.Element {
  return (
    <StyledButton onClick={onClick}>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
