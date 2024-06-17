import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PantsMan from "./components/PantsMan";
import Slider from "./components/Slider";
import texture from "./assets/texture.png";
import { BEIGE, BROWN } from "./const/const";

const GlobalStyle = createGlobalStyle`
  body{ 
    font-family: "Playwrite US Trad";
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    background-color: ${BEIGE};
    color: ${BROWN};
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }

  html {
    font-size: clamp(12px, 2vw, 18px);
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

const Texture = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${texture});
  background-size: 700px 700px;
  background-repeat: repeat;
  mix-blend-mode: soft-light;
  opacity: 0.9;
  z-index: 1;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
`;

const PantsMsg = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0;
`;

const PantsManWrapper = styled.div`
  overflow: hidden;
  height: 500px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

function App() {
  const [legs, setLegs] = useState(2);

  const handleSliderChange = (event: any) => {
    setLegs(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Background>
        <Texture />
        <PantsManWrapper>
          <PantsMan legs={legs} />
        </PantsManWrapper>
        <PantsMsg>{`${legs}-legged pants`}</PantsMsg>
        <Slider legs={legs} handleSliderChange={handleSliderChange} />
      </Background>
    </>
  );
}

export default App;
