'use client'
import SearchIcon from "@/app/components/componentSVG/SearchIcon"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value) 
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('search', searchText)
    replace(`/leader/tasks?${params}`)
  }
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
      onChange={handleChange}
      value={searchText}
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