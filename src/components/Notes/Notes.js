import { useState } from "react";
import Menu from "./Menu";
import TextArea from "./TextArea";
import Header from "./Header";
import { nanoid } from "nanoid";

function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(text, setValue) {
    const newNote = {
      id: nanoid(),
      text: text,
    };
    setNotes([...notes, newNote]);
    setValue("");
  }

  function removeItem(id) {
    setNotes(
      notes.filter((el) => {
        if (el.id === id) {
          return false;
        }
        return el;
      })
    );
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Menu notes={notes} removeItem={removeItem} />
        <TextArea addNote={addNote} />
      </div>
    </div>
  );
}

export default Notes;
