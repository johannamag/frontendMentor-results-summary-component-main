import React from "react";
import styled from "styled-components";
import Result from "./Result";
import Summary from "./Summary";

const Wrapper = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  overflow: hidden;
  margin: 10px;
  background-color: var(--white);
  border-radius: 30px;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export default function Card() {
  return (
      <Wrapper>
        <Result />
        <Summary />
      </Wrapper>
  );
}
