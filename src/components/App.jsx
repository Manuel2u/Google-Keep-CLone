import React from "react";
import Header from "./Header";
import Note from './Note';
import Footer from "./Footer";
import notes from "../notes";

function noteCreate(note){
    return(
    <Note
    key = {note.key}
    title = {note.title}
    content = {note.content}
     />
    );
}


function App(){
    return(
        <div>
            <Header />
            {notes.map(noteCreate)}
            <Footer />
        </div>
    );
}

export default App;