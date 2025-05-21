import React from "react";
import logo from "./book_serach_logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo img-fluid mt-3" alt="logo" />
        <p>Dictionary</p>
      </header>
      <main>
        <Dictionary defaultKeyword="drive" />
      </main>
      <footer className="App-footer mt-4 mb-3">
        <small>
          Coded by{" "}
          <a
            href="https://github.com/ginedou0315/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ginelle Doubek
          </a>
          , opend-sourced in{" "}
          <a
            href="https://github.com/ginedou0315/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted in{" "}
          <a
            href="https://dictionary-project-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
