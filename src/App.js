import logo from "./tennis.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo img-fluid mt-5" alt="logo" />
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
      <footer className="text-center mt-4">Coded by Ginelle Doubek</footer>
    </div>
  );
}

export default App;
