import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  const pathName = useLocation().pathname;
  return (
    <div className="App">
      <div className="links">
        <div style={{ marginRight: "1rem" }}>
          <Link
            className="linkText"
            to="/counter"
            style={
              pathName === "/counter"
                ? { color: "black" }
                : pathName === "/"
                ? { color: "#b7b7b7", fontSize: "2rem", marginRight: "5rem" }
                : { color: "#b7b7b7" }
            }
          >
            Counter
          </Link>
        </div>
        <div>
          <Link
            className="linkText"
            to="/todo"
            style={
              pathName === "/todo"
                ? { color: "black" }
                : pathName === "/"
                ? { color: "#b7b7b7", fontSize: "2rem" }
                : { color: "#b7b7b7" }
            }
          >
            TODO
          </Link>
        </div>
      </div>
      <div className="content">
        <Route exact path="/counter" component={CounterContainer} />
        <Route exact path="/todo" component={TodosContainer} />
      </div>
    </div>
  );
}

export default App;
