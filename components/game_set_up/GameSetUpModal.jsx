import { useContext } from "react";
import { GameStateContext } from "../../App";
import NumberInput from "./NumberInput";

import {
  ModalBackground,
  Modal,
  ModalHeaderText,
  ModalSubText,
  ModalFlex,
  ModalCenter,
  ModalGameBtn,
  ModalSubHeaderText,
} from "../styled/Modal.styled";

const GameSetUpModal = ({
  boardTilesHandler,
  requiredNumberInARowHandler,
  maxNumberInARow,
  playAgain,
  setIsDefaultTheme,
  isDefaultTheme,
}) => {
  const { showGameSetUp } = useContext(GameStateContext);

  return (
    showGameSetUp && (
      <ModalBackground>
        <Modal>
          <ModalHeaderText>Welcome to Tik-Tak-Toe:</ModalHeaderText>
          <ModalSubHeaderText>Paul vs Yoko</ModalSubHeaderText>
          <ModalSubText>Please customize the board:</ModalSubText>
          <ModalFlex>
            <ModalSubText>Board size:</ModalSubText>
            <NumberInput
              minValue={3}
              maxValue={10}
              defaultValue={4}
              stateUpdate={boardTilesHandler}
            />
          </ModalFlex>
          <ModalFlex>
            <ModalSubText>Required number in a row:</ModalSubText>
            <NumberInput
              minValue={3}
              maxValue={maxNumberInARow}
              defaultValue={4}
              stateUpdate={requiredNumberInARowHandler}
              controlled={true}
            />
          </ModalFlex>

          <ModalFlex>
            <ModalSubText>Toggle Theme:</ModalSubText>
            <ModalGameBtn
              onClick={() =>
                setIsDefaultTheme((setIsDefaultTheme) => !setIsDefaultTheme)
              }
            >
              {isDefaultTheme ? "Dark Theme" : "Light Theme"}
            </ModalGameBtn>
          </ModalFlex>
          <ModalCenter>
            <ModalGameBtn onClick={() => playAgain()}> PLAY GAME</ModalGameBtn>
          </ModalCenter>
        </Modal>
      </ModalBackground>
    )
  );
};

export default GameSetUpModal;
