import React from "react";
import { createContext, useReducer } from "react";

export const notesContext = createContext();

function notesReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return { notes: [...state.notes, action.payload] };
    case "GET_NOTES":
      return { notes: action.payload };
    case "DELETE_NOTE":
      return {
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    default:
      return state;
  }
}

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: [],
  });

  return (
    <notesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </notesContext.Provider>
  );
};
