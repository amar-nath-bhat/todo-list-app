import React from "react";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Lists from "./components/Lists";
import Create from "./components/Create";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Lists />
      <Create />
    </div>
  );
}

export default App;
