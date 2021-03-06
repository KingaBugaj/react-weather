import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="container">
        <Weather defaultCity="Portimao" />
      </div>
      <footer>
        <a
          href="https://github.com/KingaBugaj/react-weather"
          rel="noreferrer"
          target="_blank"
        >
          Open sourced
        </a>{" "}
        code by{" "}
        <a
          href="https://www.linkedin.com/in/kinga-bugaj-9172a7135/"
          rel="noreferrer"
          target="_blank"
        >
          Kinga Bugaj
        </a>
      </footer>
    </div>
  );
}
