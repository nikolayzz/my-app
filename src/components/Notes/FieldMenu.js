import removeIcon from "../../icons/removeIcon";
function FieldMenu(props) {
  const { id, text, removeItem } = props;

  return (
    <div id={id} className="border border-gray-400 rounded-md mb-2 ">
      <div className="break-words">{text}</div>
      <button onClick={() => removeItem(id)}>{removeIcon}</button>
    </div>
  );
}

export default FieldMenu;
