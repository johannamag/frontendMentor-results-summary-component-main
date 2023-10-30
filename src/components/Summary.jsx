import React from "react";
import styled from "styled-components";
import data from "../data.json";
import Item from "./Item";

const Sum = styled.div`
  flex: 1;
  padding: 15px;
  min-height: 316px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border-radius: 30px;
`;
const SummaryHeadline = styled.h2`
    color: var(--dark-gray-blue);
    text-align: left;
    width: 100%;
`;
const ItemCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px
`
const Button = styled.button`
    border: none;
    cursor: pointer;
    background-image: linear-gradient(
        var(--light-slate-blue-bg),
        var(--light-royal-blue-bg)
      );
    color: var(--white);
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
`;

export default function Summary() {
  const scoresData = data.find((d) => d.scores);
  return (
    <>
      {data.map((d, index) => {
        if (d.summary) {
          return (
            <Sum key={index}>
              <SummaryHeadline>{d.summary.summary}</SummaryHeadline>
              <ItemCon>
                {scoresData &&
                  scoresData.scores.map((dI, idx) => (
                    <Item
                      key={idx}
                      icon={dI.icon}
                      cat={dI.category}
                      score={dI.score}
                      color={dI.color}
                      bg={dI.bg}
                    />
                  ))}
              </ItemCon>
              <Button>{d.summary.button}</Button>
            </Sum>
          );
        }
        return null;
      })}
    </>
  );
}
