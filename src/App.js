import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Airlines from "./components/Airlines/Airlines";
import Airline from "./components/Airline/Airline";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Airlines />} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Routes>
    </div>
  );
}

export default App;
