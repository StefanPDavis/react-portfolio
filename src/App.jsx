import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="projects">
        <Navigation />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
