import { useState } from "react";
import User from "./User";
import users from "../../data/users";

function Users() {
  const [usersArray, setUsersArray] = useState(users);

  function changeItem(id, field, event) {
    setUsersArray(
      usersArray.map((el) => {
        if (id === el.id) {
          el[field] = event.target.value;
        }
        return el;
      })
    );
  }

  function sortArray(key) {
    const copy = [...usersArray];
    copy.sort((a, b) => (a[key] > b[key] ? 1 : -1)); // сортировка по возрастанию
    if (usersArray.every((el, index) => el === copy[index])) {
      // сравнение двух массивов
      copy.sort((a, b) => (a[key] < b[key] ? 1 : -1)); // по убыванию запустится только если уже отсортирован по возрастанию
    }
    setUsersArray(copy);
  }

  const rows = usersArray.map((el) => {
    return (
      <User
        key={el.id}
        id={el.id}
        firstName={el.firstName}
        lastName={el.lastName}
        email={el.email}
        gender={el.gender}
        ipAddress={el.ipAddress}
        changeItem={changeItem}
      />
    );
  });

  return (
    <div>
      <table className="shadow-lg bg-white border-collapse">
        <thead>
          <tr className="font-bold">
            <td onClick={() => sortArray("id")}>№</td>
            <td onClick={() => sortArray("firstName")}>First Name</td>
            <td onClick={() => sortArray("lastName")}>Last Name</td>
            <td>E-mail</td>
            <td>Gender</td>
            <td>IP</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Users;
