import { useSelector } from "react-redux";

function Tasks() {
  const tasks = useSelector((state) => state.todo.todos);

  return (
    <div>
      <div>Здесь будут таски</div>

      <div>
        {tasks?.map((el) => {
          return <p key={el.id}>{el.text}</p>;
        })}
      </div>
    </div>
  );
}

export default Tasks;
