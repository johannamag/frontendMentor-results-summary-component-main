import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  background-color: ${(props) => props.bg};
  padding: 8px 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  font-size: 14px;
  border: 0.1px solid ${(props) => props.color};
`;
const Left = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const Icon = styled.img``;
const Category = styled.p`
  font-size: 14px;
  color: ${(props) => props.color};
`;
const Score = styled.p`
  color: var(--dark-gray-blue);
  font-size: 14px;
`;
const Span = styled.span`
  color: grey;
  opacity: 0.5;
  font-size: 14px;
`;

export default function Item({ icon, cat, score, color, bg }) {
  return (
    <ItemContainer color={color} bg={bg}>
      <Left>
        <Icon src={icon} alt={cat} />
        <Category color={color}>{cat}</Category>
      </Left>
      <Score>
        {score}
        <Span> / 100</Span>
      </Score>
    </ItemContainer>
  );
}
