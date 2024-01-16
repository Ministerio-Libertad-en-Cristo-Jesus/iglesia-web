import SearchIcon from "@/app/components/componentSVG/SearchIcon"

const SearchBar = () => {
  return (
    <form className="flex">
      <input
      placeholder="Buscar"
      className={`outline-none w-[300px] rounded-l-lg border-y-2 border-l-2 border-l-blueI border-y-blueI py-2 pl-2 text-blueI bg-whiteI transition-all duration-200`}
      type="search" />
      <button className="flex justify-center items-center py-2 px-4 bg-blueI border-y-2 border-r-2 border-r-blueI border-y-blueI rounded-r-lg">
        <SearchIcon />
      </button>
    </form>
  )
}
 
export default SearchBar