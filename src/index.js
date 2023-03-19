import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "~/components";
import { Provider } from "react-redux";
import { store } from "~/store";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);
