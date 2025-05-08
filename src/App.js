import logo from "./book_serach_logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo img-fluid mt-5" alt="logo" />
        <p>Dictionary</p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer mt-4">
        <small>
          Coded by Ginelle Doubek, opend-sourced in{" "}
          <a
            href="https://github.com/ginedou0315/dictionary-project"
            target="_blank"
          >
            Github
          </a>{" "}
          and hosted in{" "}
          <a
            href="https://dictionary-project-portfolio.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
