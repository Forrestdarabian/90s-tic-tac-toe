import "./index.css";
import React from "react";
// import rootReducer from "./store/reducers";
import logger from "redux-logger";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Board } from "./components/board";
import { Scoreboard } from "./components/scoreboard";
// import "./styles/board.css";
// import "./styles/box.css";
// import "./styles/buttons.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
