import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: 2;
`;

const Tile = () => {
  return <Container>T</Container>;
};

export default Tile;
