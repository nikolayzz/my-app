import icon from "../../icons/searchIcon";

function SearchBar() {
  return (
    <div className="flex items-center">
      {icon}
      <input placeholder="Поиск.." className="text-base" />
    </div>
  );
}

export default SearchBar;
