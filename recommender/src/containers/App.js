import React from "react";
import "../assets/css/App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const App = props => {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
