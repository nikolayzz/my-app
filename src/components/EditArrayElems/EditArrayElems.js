import { useState } from "react";

const initNotes = [
  { text: "note1", isEdit: false },
  { text: "note2", isEdit: false },
  { text: "note3", isEdit: false },
];

function EditArrayElems() {
  const [notes, setNotes] = useState(initNotes);

  const result = notes.map((el, index) => {
    let elem;

    if (!el.isEdit) {
      elem = <span onClick={() => startEdit(index)}>{el.text}</span>;
    } else {
      elem = (
        <input
          value={el.text}
          onChange={(event) => changeNote(index, event)}
          onBlur={(event) => endEdit(index, event)}
        />
      );
    }

    return <li key={index}>{elem}</li>;
  });

  const startEdit = (index) => {
    const copy = Object.assign([], notes);
    copy[index].isEdit = true;
    setNotes(copy);
  };

  const endEdit = (index, event) => {
    const copy = Object.assign([], notes);
    copy[index].isEdit = false;
    setNotes(copy);
  };

  const changeNote = (index, event) => {
    const copy = Object.assign([], notes);
    copy[index].text = event.target.value;
    setNotes(copy);
  };

  return <ul>{result}</ul>;
}

export default EditArrayElems;
