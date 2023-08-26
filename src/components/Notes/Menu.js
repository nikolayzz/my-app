import FieldMenu from "./FieldMenu";

function Menu({ notes, removeItem }) {
  const result = notes.map((el) => {
    return (
      <FieldMenu
        key={el.id}
        id={el.id}
        text={el.text}
        removeItem={removeItem}
      />
    );
  });
  return (
    <div className="border border-gray-400 p-5 rounded-lg w-96 break-words">
      <h3 className="text-2xl font-semibold mb-5">Список записей:</h3>
      <div className="">{result}</div>
    </div>
  );
}

export default Menu;
