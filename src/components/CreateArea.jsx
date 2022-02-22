import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target; //js destructuring 
    // console.log("nn "+name);   returns name as title or content here in this case
    // console.log("vv "+value);  returns the value that is the value we type in the input field(form)
    setNote(prevNote => {
      return {
        ...prevNote, //spread operator
        [name]: value //[] converts the string to the actual value of the name const
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); //calling addNote from app.jsx file
    setNote({ //to clear the field for the next node to be added
      title: "",
      content: ""
    });
    event.preventDefault(); //prevent the default behaviour of the button like refreshing the webpage
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
