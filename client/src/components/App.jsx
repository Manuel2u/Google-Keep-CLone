import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import axios from "axios";
import CreateArea from "./CreateArea";
import { useNote } from "../hooks/useNote";

function App() {
  const { notes, dispatch } = useNote();
  const [loading, setLoading] = React.useState(false);

  function addNote(newNote) {
    dispatch({
      type: "ADD_NOTE",
      payload: newNote,
    });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("/notes")
      .then((res) => {
        dispatch({
          type: "GET_NOTES",
          payload: res.data,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const deleteNote = async (id) => {
    const response = await axios.delete(`/notes/${id}`);
    if (response.status === 200) {
      dispatch({
        type: "DELETE_NOTE",
        payload: id,
      });
    }
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {loading ? (
        <span className="load"></span>
      ) : (
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })
      )}
      <Footer />
    </div>
  );
}

export default App;
