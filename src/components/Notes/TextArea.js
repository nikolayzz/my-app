import { useState } from "react";

function TextArea({ addNote }) {
  const [value, setValue] = useState("");
  return (
    <div className="ml-10">
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="block border border-gray-400 rounded-lg mb-4 p-2"
      />
      <button
        onClick={() => addNote(value, setValue)}
        className="border border-gray-400 p-2 rounded-xl"
      >
        Save
      </button>
    </div>
  );
}

export default TextArea;
