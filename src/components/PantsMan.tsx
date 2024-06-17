import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Leg } from "../assets/leg.svg";
import { ReactComponent as Torso } from "../assets/torso.svg";

interface IPantsMan {
  legs: number;
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transform: scale(0.7);
  transform-origin: top center;

  @media (max-width: 600px) {
    transform: scale(0.4);
  }
`;

const StyledTorso = styled(Torso)`
  filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.3));
`;

const TorsoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LegBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -50px;
`;

const LegBox = styled.div<{ legs: number }>`
  background-color: #4c8e9c;
  position: absolute;
  top: 0;
  width: ${(props) => (props.legs - 2) * 148 + 61}px;
  height: 100px;
`;

const StyledLeg = styled(Leg)<{ flipped: boolean }>`
  ${(props) => (props.flipped ? "transform: scaleX(-1);" : "")}
  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.5));
  }
`;

function PantsMan(props: IPantsMan) {
  return (
    <Body>
      <TorsoBlock>
        <StyledTorso />
      </TorsoBlock>
      <LegBlock>
        {Array.from({ length: props.legs }, (_, i) => i).map((i, leg) => (
          <StyledLeg key={i} flipped={i + 1 > props.legs / 2} />
        ))}
        <LegBox {...props} />
      </LegBlock>
    </Body>
  );
}

export default PantsMan;
