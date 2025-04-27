import { React } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ContactDetails from "./components/ContactDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-details" element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
