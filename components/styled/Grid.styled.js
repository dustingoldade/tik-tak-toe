import styled from "styled-components";

export const GridContainer = styled.div`
  height: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  border: solid 3px ${({ theme }) => theme.primary};
  padding: 2rem;
  margin: 2rem;
  border-radius: 5px;

  transition: background-color 0.5s, border 0.5s;
`;

export const GridFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const GridTileFlex = styled.div`
  background-color: ${({ theme }) => theme.tileBg};
  transition: background-color 0.5s;
  border: solid 2px black;
  border-radius: 5px;
  margin: 0.1rem;
  &:hover {
    background-color: ${({ theme }) => theme.tileBgHover};
    cursor: pointer;
  }
`;
