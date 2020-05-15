import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { Board } from "./components/board";
import { Scoreboard } from "./components/scoreboard";
import "./styles/board.css";
import "./styles/box.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/scoreboard" component={Scoreboard} />
        <Route path="/board" component={Board} />
      </Switch>
    </div>
  );
}

export default App;
