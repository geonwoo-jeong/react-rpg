import React from "react";
import Map from "../map";
import styled from "styled-components";
import Background from "../background";

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: black;
`;

const World = () => {
  return (
    <Container>
      <Map />
      <Background />
    </Container>
  );
};

export default World;
