import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="text-4xl font-anonymous-pro text-center">Hello!</h1>
      <h3 className="font-bold">Pet Projects:</h3>
      <ul>
        <li>
          <NavLink to="checklist">CheckList</NavLink>
        </li>
        <li>
          <NavLink to="notes">Notes</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
