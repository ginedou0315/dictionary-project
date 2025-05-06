import logo from "./book_serach_logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
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
        <small>Coded by Ginelle Doubek</small>
      </footer>
    </div>
  );
}

export default App;
