import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/todoSlice";
import { nanoid } from "nanoid";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    const todo = {
      id: nanoid(),
      text: inputValue,
      completed: false,
      important: false,
    };

    dispatch(addTodo(todo));
    setInputValue("");
  };

  return (
    <form onClick={(event) => event.preventDefault()} className="ml-3">
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Не забыть о..."
        className="border rounded-md p-1 w-96"
      />
      <button
        type="submit"
        onClick={() => addTodoHandler()}
        className="border rounded-md p-1"
      >
        Добавить
      </button>
    </form>
  );
};

export default Form;
