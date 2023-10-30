import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--pale-blue);
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 12px;
`;

const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: var(--dark-gray-blue);

  &:hover {
    color: var(--light-red);
  }
`;

export default function Footer() {
  return (
    <Container>
      Challenge by:
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      Coded by:
      <Link href="www.johannamagdalena.com" target="_blank">
        Johanna Magdalena
      </Link>
    </Container>
  );
}
