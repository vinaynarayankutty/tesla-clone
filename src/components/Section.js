import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade direction="up">
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url("./images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
