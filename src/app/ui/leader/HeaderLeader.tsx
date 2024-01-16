import SearchBar from "./SearchBar"

const HeaderLeader = () => {
  return (
    <div className="flex w-full justify-between">
      <h1 className="font-black text-blueI text-3xl">Dashboard</h1>
      <div className="">
        <SearchBar />
      </div>
    </div>
  )
}
 
export default HeaderLeader