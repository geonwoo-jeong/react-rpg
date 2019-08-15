import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import bard from "../../assets/character/bard.png";

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

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = setupCanvas(canvas);

    // 캔버스에 대한 로딩이 끝나면 서버? 에서 불러오는 처리가 필요
    // 분리할 것
    // fetch users and

    const image = new Image();
    image.src = bard;
    image.addEventListener("load", () => {
      const width = 80;
      const height = 110;
      context!.setTransform(1, 0, 0, 1, 1900, 650); // 마지막 2개느 현재 위치
      context!.drawImage(
        image,
        width * 0,
        height * 0,
        width,
        height,
        0,
        0,
        width,
        height
      );
    });
  }, [canvasRef]);

  return <Container ref={canvasRef} />;
};

export default Map;
