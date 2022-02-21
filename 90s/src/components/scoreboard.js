import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Storage } from "../storage/storage";

// Create scoreboard component

export class Scoreboard extends React.Component {
  state = {
    scoreboard: [],
  };

  // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
    let storage = await new Storage().getData();

    this.setState({
      scoreboard: storage,
    });
  }

  render() {
    return (
      <div className="game">
        <header className="behind">
          <div>
            <h3 className="top"> Choose a Page </h3>
            <div className="nav">
              <img className="right-tiki" src="/websitegifs016.gif" />
              <br />
              <NavLink to="/">
                <button>Home</button>
              </NavLink>
              <NavLink to="/scoreboard">
                <button>Play</button>
              </NavLink>
              <NavLink to="/about">
                <button>About</button>
              </NavLink>
              <NavLink to="/contact">
                <button>Contact</button>
              </NavLink>
              <img className="left-tiki" src="/websitegifs016.gif" />
            </div>
          </div>
          <br />
        </header>
        <img className="typing" src="/typingcomputer.gif" />
        <h1>Tic-Tac-Toe!</h1>
        <h3>
          Find a friend and take turns filling up the boxes until one player
          wins!
        </h3>
        <h3>Recent games:</h3>
        {/* {List with previous games} */}
        <p>
          {this.state.scoreboard.map((leader, key) => {
            return (
              <p key={key}>
                {" "}
                <img className="dino" src="/walldino.gif" />
                <br />
                {leader}
              </p>
            );
          })}
        </p>
        {/* Link to start new game */}
        <Link to="/board">
          <button className="btn">Start a new game</button>
        </Link>
        <br />
        <img src="/batana1.gif" />
        <br />
        <img className="anime" src="/animation_09mer.gif" />
        <img src="/animation_04jup.gif" />
        <footer class="footer pt-80 pt-xs-60">
          <img className="barbwire" src="/boarder_barbwire1.gif" />

          <div class="footer-container">
            <div class="copyright">
              <p>
                © 2020
                <a>
                  <b> Forrest Darabian </b>
                </a>
                All Rights Reserved.
              </p>
            </div>

            <div class="left">
              <h4 class="something">Contact / Links</h4>
              <li>
                {" "}
                <a href="mailto:forrestdarabian@gmail.com">
                  <i class="ion-ios-email fa-icons"></i>
                  Contact Me
                </a>{" "}
              </li>
            </div>
            <br />
          </div>
          <img className="barbwire" src="/boarder_barbwire1.gif" />
        </footer>{" "}
      </div>
    );
  }
}
