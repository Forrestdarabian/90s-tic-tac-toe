import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function About() {
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
      <div className="top-h1">
        <img src="/eyemonster.gif" />
        <img src="/globeputar.gif" />
        <img src="/beau_pasanime.gif" />
      </div>
      <div className="middle-content">
        <div className="left">
          <img src="cryclown.gif" />
          <br />
          <br />
          <br />

          <img className="cute" src="cute_036.gif" />
        </div>
        <div className="middle">
          <h1>About</h1>
          <img src="gator4.gif" />
          <p>
            This website may look like it was made in the 90's, however, being
            inspired by that decade, I decided to make an App that glorifies the
            simplicity and beauty of those wonderful years. I have implemented a
            Tic-Tac-Toe Game for you to play while browsing the awesome
            aesthetics of the 1990's!
          </p>
          <img src="/clown_in_box.gif" />
        </div>
        <div className="right">
          <img src="cryclown.gif" />
          <br />
          <br />
          <br />

          <img className="cute" src="cute_036.gif" />
        </div>
      </div>
      <div className="skulls">
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
        <img src="/kbd08keysani.gif" />
      </div>
      <br />
      <br />
      <footer class="footer pt-80 pt-xs-60">
        <img className="barbwire" src="/boarder_barbwire1.gif" />

        <div class="footer-container">
          <div class="copyright">
            <p>
              © 2022
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

export default About;
