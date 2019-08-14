import React, { useRef } from "react";
import styled from "styled-components";
import bard from "../../assets/character/bard.png";

const Container = styled.canvas`
  position: absolute;
  width: 100vw;
  height: 100%;
`;

const Map = () => {
  const setupCanvas = (canvas: HTMLCanvasElement) => {
    const dpr = 2;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx!.scale(dpr, dpr);

    return ctx;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onClick = () => {
    const canvas = canvasRef.current;

    if (canvasRef && canvas) {
      const context = setupCanvas(canvas);
      const scaleRate = 4;
      const image = new Image(15, 30);
      image.src = bard;
      image.width = 15;
      image.height = 30;

      context!.save();
      context!.setTransform(1, 0, 0, 1, 0, 0);
      context!.clearRect(0, 0, 500, 500);

      const spriteWidth = 0;
      const spriteHeight = 0;
      const pixelsLeft = 0;
      const pixelsTop = 0;
      const canvasPosX = 0;
      const canvasPosY = 0;

      context!.drawImage(image, 0, 0, 60, 120, 30, 30, 60, 120);
      context!.scale(0.5, 0.5);
    }
  };

  return <Container ref={canvasRef} onClick={onClick} />;
};

export default Map;
