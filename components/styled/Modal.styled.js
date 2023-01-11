import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  max-width: fit-content;
  min-width: 500px;
  border: solid ${({ theme }) => theme.primary} 3px;
  background-color: ${({ theme }) => theme.modalBg}};
  border-radius: 5px;
  padding: 3rem;
  transition: background-color 0.5s, solid 0.5s ;
`;

export const ModalHeaderText = styled.h1`
  margin: 0;

  text-align: center;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;
`;
export const ModalSubHeaderText = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;
`;

export const ModalSubText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;
`;

export const ModalFlex = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalGameBtn = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  border: solid ${({ theme }) => theme.primary} 1px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: color 0.5s, background-color 0.5s, border 0.5s;

  &:hover {
    cursor: pointer;
    scale: 0.98;
    opacity: 0.9;
  }
`;

export const NumberInputFlex = styled.div`
  display: inline-flex;
  justify-items: center;
  border-radius: 5px;
  align-items: center;
  border: solid ${({ theme }) => theme.primary} 1px;
  transition: border 0.5s;

  }
`;

export const NumberInputButton = styled.button`
  padding: 0.5rem 1.25rem;
  justify-items: center;
  border-radius: 5px;
  align-items: center;
  display: inline-flex;
  border: solid ${({ theme }) => theme.primary} 0px;
  background-color: ${({ theme }) => theme.modalBg};
  color: ${({ theme }) => theme.primary};
  transition: background-color 0.5s, color 0.5s, border 0.5s;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ModalSubtextOptions = styled.p`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.primary};

  transition: background-color 0.5s;
`;
