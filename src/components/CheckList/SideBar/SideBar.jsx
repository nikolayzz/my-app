import Categories from "./Categories";
import NavButtons from "./NavButtons";
import SearchForm from "./SearchForm";

function SideBar() {
  return (
    <div className="border">
      <SearchForm />
      <NavButtons />
      <Categories />
    </div>
  );
}

export default SideBar;
