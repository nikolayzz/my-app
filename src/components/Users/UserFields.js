import { useState } from "react";

function UserFields(props) {
  const { id, text, type, changeItem } = props;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <td>
      {isEdit ? (
        <input
          value={text}
          onChange={(event) => changeItem(id, type, event)}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
    </td>
  );
}

export default UserFields;
