import cover from './cover400.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover} className="App-logo" alt="logo" />
        <p>
          Introduction to Continuous Delivery with GitLab
        </p>
        <a
          className="App-link"
          href="https://devops.redpill.solutions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on CI/CD
        </a>
      </header>
    </div>
  );
}

export default App;
