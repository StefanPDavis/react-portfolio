import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React>
      <div>
        <Header />
      </div>
      <div className="projects">
        <Navigation />
      </div>
      <div>
        <Footer />
      </div>
    </React>
  );
}

export default App;
