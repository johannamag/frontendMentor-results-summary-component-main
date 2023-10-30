import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Re = styled.div`
  flex: 1;
  padding: 15px;
  background-image: linear-gradient(
    var(--light-slate-blue-bg),
    var(--light-royal-blue-bg)
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
`;
const ResultHeadline = styled.h3`
  color: var(--light-lavender);
`;
const ResultContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  aligns-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  background-image: linear-gradient(
    var(--violet-blue-circle),
    var(--persian-blue-circle)
  );
`;
const YourScore = styled.h1`
  color: var(--white);
  font-size: 28px;
`;
const TotalScore = styled.p`
  color: var(--light-lavender);
  font-size: 16px;
`;
const SuccessHeadline = styled.p`
  color: var(--white);
  font-size: 22px;
`;
const SuccessDesc = styled.p`
  color: var(--light-lavender);
  font-size: 14px;
  text-align: center;
`;

export default function Result() {
  return (
    <>
      {data.map((d, index) => {
        if (d.result) {
          return (
            <Re key={index}>
              <ResultHeadline>{d.result.headline}</ResultHeadline>
              <ResultContainer>
                <YourScore>{d.result.yourScore}</YourScore>
                <TotalScore>{d.result.totalScore}</TotalScore>
              </ResultContainer>
              <SuccessHeadline>{d.result.successHeadline}</SuccessHeadline>
              <SuccessDesc>{d.result.successDesc}</SuccessDesc>
            </Re>
          );
        }
        return null;
      })}
    </>
  );
}
