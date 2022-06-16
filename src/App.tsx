import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
