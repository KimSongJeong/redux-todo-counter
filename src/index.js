import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom"; // * BrowserRouter 불러오기

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
