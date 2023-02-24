import pipeline from "./pipeline.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pipeline} className="App-logo" alt="logo" />
        {/* <p>CI/CD Pipeline</p> */}
        <p>Release: v0.0.1</p>
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
