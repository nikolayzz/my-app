import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="border border-gray-400 mb-5  rounded-lg p-3 flex justify-between">
      <h1 className="inline text-2xl font-bold uppercase">Блокнот</h1>
      <SearchBar />
    </div>
  );
}

export default Header;
