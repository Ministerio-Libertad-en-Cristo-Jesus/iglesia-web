'use client'
import SearchIcon from "@/app/components/componentSVG/SearchIcon"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value) 
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    params.set('search', searchText)
    replace(`${pathname}?${params}`)
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-end w-full">
      <input
      onChange={handleChange}
      value={searchText}
      placeholder="Buscar"
      className={`text-sm md:text-base appearance-none rounded-r-none outline-none w-full sm:w-[40%] rounded-l-lg border-y border-l md:border-y-2 md:border-l-2 border-l-blueI border-y-blueI py-1 pl-1 md:py-2 md:pl-2 text-blueI bg-white transition-all duration-200`}
      type="search" />
      <button className="flex justify-center items-center py-1 px-3 md:py-2 md:px-4 bg-blueI border-y border-r md:border-y-2 md:border-r-2 border-r-blueI border-y-blueI rounded-r-lg">
        <SearchIcon />
      </button>
    </form>
  )
}
 
export default SearchBar