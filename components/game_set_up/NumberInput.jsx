import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const NumberInput = ({
  minValue,
  maxValue,
  defaultValue,
  stateUpdate,
  inputText,
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
    <Box
      display={"inline-flex"}
      justifyItems={"center"}
      border={1}
      borderRadius={"5px"}
      alignItems={"center"}
    >
      <Button size="small" onClick={decrementHandler}>
        -
      </Button>
      <Typography variant="subtitle2" sx={{ px: 1 }}>
        {value}
      </Typography>
      <Button size="small" onClick={incrementHandler}>
        +
      </Button>
    </Box>
  );
};

export default NumberInput;
