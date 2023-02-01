import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  color: pink;
  padding: 4px;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
