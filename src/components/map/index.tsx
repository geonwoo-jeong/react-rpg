import React, { useRef } from "react";
import styled from "styled-components";
import bard from "../../assets/character/bard.png";

const Container = styled.canvas`
  position: absolute;
  width: 100vw;
  height: 100%;
`;

const Map = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onClick = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return null;
    }

    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = bard;

    context!.save();
    context!.setTransform(1, 0, 0, 1, 0, 0);
    context!.clearRect(0, 0, 500, 500);

    const spriteWidth = 0;
    const spriteHeight = 0;
    const pixelsLeft = 0;
    const pixelsTop = 0;
    const canvasPosX = 0;
    const canvasPosY = 0;

    context!.drawImage(image, 0, 0, 60, 120, 30, 30, 60 / 4, 120 / 4);
  };

  return <Container ref={canvasRef} onClick={onClick} />;
};

export default Map;
