import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Contact() {
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
        <img src="/imag0002.gif" />
        <img className="welcomegif" src="/a-starhead.gif" />

        <img src="/clownanim.gif" />
      </div>
      <div className="middle-content">
        <div className="left">
          <img src="computer_surfing_sm.gif" />
          <br />
          <br />
          <br />

          <img src="monster.gif" />
        </div>
        <div className="middle">
          <h1>Contact</h1>
          <img src="computerguy.gif" />
          <p>
            Thank you for your interest in my website! If you have any
            questions, comments or inquiries, please contact me at the very
            bottom of this page!
          </p>
          <img src="/hittingkeyboard.gif" />
        </div>
        <div className="right">
          <img src="computer_surfing_sm.gif" />
          <br />
          <br />
          <br />

          <img src="monster.gif" />
        </div>
      </div>
      <div className="skulls">
        <img src="/pencil.gif" />
        <img src="/candlite.gif" />
        <img src="/pencil.gif" />
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
          </div>
          <br />
        </div>
        <img className="barbwire" src="/boarder_barbwire1.gif" />
      </footer>{" "}
    </div>
  );
}

export default Contact;
