import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Storage } from "../storage/storage";
import { Box } from "./board-box";
import * as utils from "../utils/functions";

// Create Board

export class Board extends React.Component {
  constructor(props) {
    super(props);

    //  Initialize component state
    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    };
  }

  // Create instance of Storage object
  storage = new Storage();

  // Handle click on boxes on board
  handleBoxClick(index) {
    // get current state of boxes
    const boxes = this.state.boxes.slice();

    // Get current state of history
    let history = this.state.history;

    // Stop the game if all boxes are clicked
    if (utils.areAllBoxesClicked(boxes) === true) {
      return;
    }

    // Mark the box as x or o
    boxes[index] = this.state.xIsNext ? "X" : "O";

    // Add move to game history
    history.push(this.state.xIsNext ? "X" : "O");

    // Update component state with new data
    this.setState({
      boxes: boxes,
      history: history,
      xIsNext: !this.state.xIsNext,
    });
  }

  // Handle board restart - set component state to initial state
  handleBoardRestart = () => {
    this.setState({
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    });
  };

  render() {
    // Get winner (if there is one)
    const winner = utils.findWinner(this.state.boxes);
    // Are all boxes checked?
    const isFilled = utils.areAllBoxesClicked(this.state.boxes);
    // Status message
    let status;

    if (winner) {
      // If winner exists, create status message
      status = `The winner is: ${winner}!`;

      // Push data about the game to storage
      this.storage.update([`${winner} was last games winner!`]);
    } else if (!winner && isFilled) {
      // If game is a draw, create status message
      status = "Draw!";

      // Push data about the game to storage
      this.storage.update(["Draw!"]);
    } else {
      // If theere is no winner and game isnt a draw, ask next player to make a move
      status = `It is ${this.state.xIsNext ? "X" : "O"}'s turn.`;
    }

    return (
      <>
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

        {/* Game board */}
        <div className="board-wrapper">
          <div className="board">
            <h2 className="board-heading">{status}</h2>

            <div className="board-row">
              <Box
                value={this.state.boxes[0]}
                onClick={() => this.handleBoxClick(0)}
              />

              <Box
                value={this.state.boxes[1]}
                onClick={() => this.handleBoxClick(1)}
              />

              <Box
                value={this.state.boxes[2]}
                onClick={() => this.handleBoxClick(2)}
              />
            </div>

            <div className="board-row">
              <Box
                value={this.state.boxes[3]}
                onClick={() => this.handleBoxClick(3)}
              />

              <Box
                value={this.state.boxes[4]}
                onClick={() => this.handleBoxClick(4)}
              />

              <Box
                value={this.state.boxes[5]}
                onClick={() => this.handleBoxClick(5)}
              />
            </div>

            <div className="board-row">
              <Box
                value={this.state.boxes[6]}
                onClick={() => this.handleBoxClick(6)}
              />

              <Box
                value={this.state.boxes[7]}
                onClick={() => this.handleBoxClick(7)}
              />

              <Box
                value={this.state.boxes[8]}
                onClick={() => this.handleBoxClick(8)}
              />
            </div>
          </div>
          <div className="board-history">
            <h2 className="board-heading">Moves history:</h2>
            {/* List with history of moves */}
            <p className="board-historyList">
              {this.state.history.length === 0 && (
                <span>No moves to show.</span>
              )}
              {this.state.history.length !== 0 &&
                this.state.history.map((move, index) => {
                  return (
                    <p key={index}>
                      Move {index + 1}: <strong>{move}</strong>
                    </p>
                  );
                })}
            </p>
          </div>
          {
            <div className="board-footer">
              <button className="btn" onClick={this.handleBoardRestart}>
                Start new game
              </button>
            </div>
          }
          <div className="penglibrary">
            <img src="/tux_computer_dig_md_clr.gif" />
            <img src="/bibliothecaresse-aan-kar.gif" />
          </div>
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
                <li>
                  <a href="https://www.forrestdarabian.com/">
                    <i class="fa-angle-double-right"></i>Developers Site
                  </a>
                </li>
              </div>
              <br />
            </div>
            <img className="barbwire" src="/boarder_barbwire1.gif" />
          </footer>{" "}
        </div>
      </>
    );
  }
}
