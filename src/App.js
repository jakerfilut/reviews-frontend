import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Airlines from "./components/Airlines/Airlines";
import Airline from "./components/Airline/Airline";
const API = "http://localhost:3000/api/v1/airlines";

function App() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Airlines airlines={airlines} />} />
        <Route path="/airlines/:slug" element={<Airline />} />
      </Routes>
    </div>
  );
}

export default App;
