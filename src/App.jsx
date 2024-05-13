import React , { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Privacy from "./Pages/Privacy";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./Pages/Products";
import FloorDrain from "./Pages/Products/FloorDrain"
import ModularDrain from "./Pages/Products/ModularDrain"
import SlotDrain from "./Pages/Products/SlotDrain"
import ShowerDrain from "./Pages/Products/ShowerDrain"
import FloorCleanout from "./Pages/Products/FloorCleanout"

class App extends Component {
  componentDidMount() {
    this.loadScripts([
      "./template/HTWF/scripts/jquery.min.js",
      "./template/HTWF/scripts/parallax.min.js",
      "./template/HTWF/scripts/script.js",
      "./template/HTWF/scripts/bootstrap/js/bootstrap.min.js",
      "./template/HTWF/scripts/imagesloaded.min.js",
      "./template/HTWF/scripts/jquery.magnific-popup.min.js",
      "./template/HTWF/scripts/flexslider/jquery.flexslider-min.js",
      "./template/HTWF/scripts/jquery.tab-accordion.js",
      "./template/HTWF/scripts/isotope.min.js",
      "./template/HTWF/scripts/bootstrap/js/bootstrap.popover.min.js",
      "./template/HTWF/scripts/jquery.progress-counter.js"
    ]);
  }
  
  loadScripts(scripts) {
    if (scripts.length === 0) return; // Base case
    
    const script = document.createElement("script");
    script.src = scripts[0];
    script.async = true;
    
    const remainingScripts = scripts.slice(1); // Remove the first script from the array
    
    script.onload = () => {
      this.loadScripts(remainingScripts); // Recursively load the remaining scripts
    };
    
    document.body.appendChild(script);
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/floor_drain" element={<FloorDrain/>} />
          <Route path="/modular_drain" element={<ModularDrain/>} />
          <Route path="/slot_drain" element={<SlotDrain/>} />
          <Route path="/shower_channels" element={<ShowerDrain/>} />
          <Route path="/floor_cleanout" element={<FloorCleanout/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
}

export default App;
