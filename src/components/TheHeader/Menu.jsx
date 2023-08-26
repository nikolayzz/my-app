import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to=".">Home</NavLink>
      <NavLink to="checklist">CheckList</NavLink>
    </nav>
  );
};

export default Menu;
