import React from "react";

function CreateArea(props) {

  return (
    <div>
      <form>
        <input name="title" onChange={props.add} value={props.title} placeholder="Title" />
        <textarea name="content" onChange={props.add} value={props.content} placeholder="Take a note..." rows="3" />
        <button onClick={(e)=>props.store(e)} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
