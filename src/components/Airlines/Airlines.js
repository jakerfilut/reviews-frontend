import React, { useState, useEffect, Fragment } from "react";
import Airline from "./Airline";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gird-gap: 20px;
width: 100%
padding: 20px;
`;

function Airlines({ airlines }) {
  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} props={item} />;
  });

  return (
    <Home>
      <Header>
        <h1>Airline Reviews</h1>
        <Subheader>Honest, unbaised airline reviews</Subheader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
}

export default Airlines;
