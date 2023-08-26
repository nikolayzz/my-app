import { NavLink } from "react-router-dom";

function NavButtons() {
  return (
    <ul>
      <li>
        <NavLink to="/checklist">Мой день</NavLink>
      </li>
      <li>
        <NavLink to="/checklist">Все задачи</NavLink>
      </li>
      <li>Важные</li>
      <li>
        <NavLink to="/checklist/done">Завершенные</NavLink>
      </li>
      <li>
        <NavLink to="/checklist/deleted">Удаленные</NavLink>
      </li>
    </ul>
  );
}

export default NavButtons;
