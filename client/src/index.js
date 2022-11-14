import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { NotesProvider } from "./components/notesContext/noteContext";

ReactDOM.render(
  <NotesProvider>
    <App />
  </NotesProvider>,
  document.getElementById("root")
);
