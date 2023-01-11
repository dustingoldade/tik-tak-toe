import styled from "styled-components";

export const PlayAgainButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};

  border-radius: 5px;
  border: solid ${({ theme }) => theme.primary} 1px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  min-width: 12rem;

  &:hover {
    cursor: pointer;
    scale: 0.98;
    opacity: 0.9;
  }
`;
