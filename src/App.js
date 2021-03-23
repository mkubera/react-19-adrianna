import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import NavBtn from "./Components/Nav/NavBtn";

function App() {
  const title = "My First App";
  const navBtns = [
    { name: "Home", colour: "blue" },
    { name: "Products", colour: "red" },
    { name: "Contact", colour: "orange" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Title title={title} />

        <nav>
          {navBtns.map((btn) => {
            return <NavBtn name={btn.name} colour={btn.colour} />;
          })}
        </nav>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
