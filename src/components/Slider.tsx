import React, { useState } from "react";
import { styled } from "styled-components";
import { BROWN, LIGHT_BROWN, MAX_LEGS, MIN_LEGS } from "../const/const";

interface ISlider {
  legs: number;
  handleSliderChange: (event: any) => void;
}

const SliderContainer = styled.div`
  width: 300px;
  z-index: 999;

  @media (max-width: 600px) {
    width: 200px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    background: ${LIGHT_BROWN};
    outline: none;
    border-radius: 5px;
  }

  input[type="range"]:hover {
    opacity: 1;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${BROWN};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  }

  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${BROWN};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  }

  input[type="range"]::-ms-thumb {
    width: 20px;
    height: 20px;
    background: ${BROWN};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  }
`;

const StyledSlider = styled.input``;

const Slider = (props: ISlider) => {
  return (
    <SliderContainer>
      <StyledSlider
        type="range"
        min={MIN_LEGS}
        max={MAX_LEGS}
        value={props.legs}
        onChange={props.handleSliderChange}
      />
    </SliderContainer>
  );
};

export default Slider;
