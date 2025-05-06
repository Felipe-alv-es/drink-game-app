import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./Assets/Styles/global";
import { PlayersProvider } from "./Context/PlayersContext";
import { DeckProvider } from "./Context/DeckContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PlayersProvider>
      <DeckProvider>
        <App />
        <GlobalStyles />
      </DeckProvider>
    </PlayersProvider>
  </React.StrictMode>
);
