
import { Search } from "lucide-react";

const Searchbar = () => {


  return (
    <form
      className="max-w-[300px] w-full relative"
    >
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search here... "
          className="px-2 py-1 rounded-l-md w-full border border-dark text-light"         
        />
        <button
          type="submit"
          className="px-2 py-1 rounded-r-md bg-white border-[#382110] border-[.5px]"
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;