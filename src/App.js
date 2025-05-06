import logo from "./tennis.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-fluid p-5 m-5" alt="logo" />
        <p>Play tennis</p>
        <a
          className="App-link"
          href="www.wtatennis.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to Play Tennis
        </a>
      </header>
    </div>
  );
}

export default App;
