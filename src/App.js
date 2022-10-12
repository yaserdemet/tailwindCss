import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppRouter from "./pages/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
