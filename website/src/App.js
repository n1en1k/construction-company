import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Refrences from "./routes/Refrences";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/refrences" element={<Refrences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
