import pipeline from "./pipeline.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pipeline} className="App-logo" alt="logo" />
        <p>CI/CD Pipeline Practicing</p>
        <p>Release: v0.0.1</p>
        <p>I want to see: Release: v0.1.0</p>

        <a
          className="CI/CD-link"
          href="https://en.wikipedia.org/wiki/CI/CD"
          target="_blank"
          rel="noopener noreferrer"
        >
          CI/CD
        </a>
      </header>
    </div>
  );
}

export default App;
