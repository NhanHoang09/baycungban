import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
