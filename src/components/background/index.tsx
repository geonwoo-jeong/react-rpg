import React from "react";
import styled from "styled-components";
import sky from "../../assets/background/sky.png";
import sea from "../../assets/background/sea.png";
import clouds from "../../assets/background/clouds.png";
import ground from "../../assets/background/far-grounds.png";

const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-size: cover;
`;
const Sky = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 304px;
  background-image: url(${sky});
  background-repeat: repeat-x;
`;
const Clouds = styled.div`
  width: 100%;
  height: 236px;
  background-image: url(${clouds});
  background-repeat: repeat-x;
  animation: background-animate 100000s linear infinite;
`;

const Sea = styled.div`
  width: 100%;
  height: 96px;
  background-image: url(${sea});
  background-repeat: repeat-x;
  animation: background-animate 20000s linear infinite reverse;
`;
const Ground = styled.div`
  width: 100%;
  height: 96px;
  background-image: url(${ground});
  background-position: 60vw 0;
  background-repeat: no-repeat;
`;

const Background = () => {
  return (
    <Container>
      <Sky>
        <Clouds />
      </Sky>
      <Sea>
        <Ground />
      </Sea>
    </Container>
  );
};

export default Background;
