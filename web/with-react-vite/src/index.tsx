import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as JotaiProvider } from "jotai";
import Main from "./demo-ui/main";
import "./demo-ui/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <JotaiProvider>
      <Main />
    </JotaiProvider>
  </React.StrictMode>
);
