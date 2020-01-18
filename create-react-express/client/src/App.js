import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About/index";
import View from "./pages/View/View";
import Search from "./pages/Search/Search";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/view" component={View} />
          <Route exact path="/search" component={Search} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;