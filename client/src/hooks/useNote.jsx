import { useContext } from "react";

import { notesContext } from "../components/notesContext/noteContext";

export function useNote() {
  const context = useContext(notesContext);

  if (!context) {
    throw new Error("useNote must be used within a NotesProvider");
  }

  return context;
}
