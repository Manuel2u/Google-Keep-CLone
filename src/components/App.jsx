import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [newNote, handleNotes] = useState({
        title:"",
        content:""
    })
    const [allItems, handleAllItems] = useState([]);

    function addNote(e){
        const {value, name} = e.target;

        handleNotes((prevValue)=>{
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    function storeItems(e){
        handleAllItems((prev)=>{
            return [...prev, newNote]
        })
        handleNotes(()=>{
            return{
                title:"",
                content:""
            }
            
        })
        e.preventDefault();
    }

   
    function deleteItem(id){
        handleAllItems((prev)=>{
        return prev.filter((item, index)=>{
            return index !== id
        });
        });
    }

  return (
    <div>
      <Header />
      <CreateArea
      add={addNote}
      title={newNote.title}
      content={newNote.content}
      store={storeItems}
      
       />
       {allItems.map((items,index)=>{
        return <Note key={index} title={items.title} delete={deleteItem} id={index} content={items.content} />
       })}
      
      <Footer />
    </div>
  );
}

export default App;
