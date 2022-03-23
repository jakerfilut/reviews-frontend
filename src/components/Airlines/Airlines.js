import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Airline from "./Airline";
const API = "http://localhost:3000/api/v1/airlines";

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} props={item} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Airline Reviews</h1>
        <div className="subheader">Honest, unbaised airline reviews</div>
      </div>
      <div className="grid">{grid}</div>
    </div>
  );
}

export default Airlines;
