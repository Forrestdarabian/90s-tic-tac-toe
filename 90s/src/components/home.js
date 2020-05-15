import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="body">
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
      <img className="lightning" src="/LightL.gif" />
      <img className="lightning" src="/LightR.gif" />
      <div className="top-h1">
        <img src="/hello.gif" />
        <img src="/welcome13d.gif" />
        <img src="/homeswrl_e0.gif" />
      </div>
      <div className="middle-content">
        <div className="left">
          <img src="new_must_use.gif" />
          <br />
          <br />
          <br />

          <img src="monster-hugo.gif" />
        </div>
        <div className="middle">
          <h1>90's Tic-Tac-Toe</h1>
          <img src="devil22t_anim.gif" />
          <p>
            This is the home page, click <a href="./scoreboard">HERE</a> to play
            the game!
          </p>
          <img className="browser" src="any_browser_computer.gif" />
        </div>
        <div className="right">
          <img src="new_must_use.gif" />
          <br />
          <br />
          <br />

          <img src="monster-hugo.gif" />
        </div>
      </div>
      <div className="skulls">
        <img src="spinskul.gif" />
        <img src="spinskul.gif" />
        <img src="spinskul.gif" />
        <img src="spinskul.gif" />
        <img src="spinskul.gif" />
        <img src="spinskul.gif" />
        <img src="spinskul.gif" />
      </div>
      <br />
      <br />
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
  );
}

export default Home;
