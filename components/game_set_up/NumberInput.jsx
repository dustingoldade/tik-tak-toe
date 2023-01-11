import { useState } from "react";
import {
  NumberInputFlex,
  NumberInputButton,
  ModalSubtextOptions,
} from "../styled/Modal.styled";

const NumberInput = ({
  minValue,
  maxValue,
  defaultValue,
  stateUpdate,
  controlled = 0,
}) => {
  const [value, setValue] = useState(defaultValue);

  const incrementHandler = () => {
    if (value === maxValue) {
      return;
    }
    setValue((prevState) => {
      const newState = ++prevState;
      stateUpdate(newState);
      return newState;
    });
  };

  const decrementHandler = () => {
    if (value === minValue) {
      return;
    }
    setValue((prevState) => {
      const newState = --prevState;
      stateUpdate(newState);
      return newState;
    });
  };

  if (controlled) {
    if (maxValue < value) {
      setValue(maxValue);
    }
  }

  return (
    <NumberInputFlex>
      <NumberInputButton onClick={decrementHandler}>-</NumberInputButton>
      <ModalSubtextOptions>{value}</ModalSubtextOptions>
      <NumberInputButton onClick={incrementHandler}>+</NumberInputButton>
    </NumberInputFlex>
  );
};

export default NumberInput;
