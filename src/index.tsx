import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlayerProvider } from "./providers/player-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </React.StrictMode>
);
