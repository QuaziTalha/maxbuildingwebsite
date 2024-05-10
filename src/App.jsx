import React , { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./Pages/Products";

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
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
}

export default App;
