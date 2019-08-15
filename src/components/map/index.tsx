import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import bard from "../../assets/character/bard.png";
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/player/selectors";

const Container = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const setupCanvas = (
  canvas: HTMLCanvasElement
): CanvasRenderingContext2D | null => {
  const dpr = 2;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.scale(dpr, dpr);

  return ctx;
};

const Map = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const player = useSelector(playerSelector);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = setupCanvas(canvas);

    const image = new Image();
    image.src = bard;
    image.addEventListener("load", () => {
      const width = 80;
      const height = 110;
      context!.setTransform(1, 0, 0, 1, 0, 0);
      context!.drawImage(
        image,
        width * 0,
        height * 0,
        width,
        height,
        player.positionX,
        player.positionY,
        width,
        height
      );
    });
  }, [player]);

  return <Container ref={canvasRef} />;
};

export default Map;
