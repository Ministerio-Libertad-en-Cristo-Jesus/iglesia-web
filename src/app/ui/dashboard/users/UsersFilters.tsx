'use client'
import SelectFilter from "@/app/components/SelectFilter"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const UsersFilters = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [role, setRole] = useState('')
  const roleOptions = [
    { value: 'pastor', text: 'Pastor' },
    { value: 'lider', text: 'Lider' }
  ]

  const params = new URLSearchParams(searchParams)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    const { name, value } = e.target
    if (name === 'role') {
      if (value === '') {
        params.delete('role')
      } else {
        params.set('role', value)
        setRole(value)
        replace(`${pathname}?${params}`)
      }
    }
  }

  const handleClick = () => {
    setRole('')
    replace('/dashboard/users')
  }
  return (
    <section className="flex flex-col md:flex-row w-full items-end gap-4 sm:gap-6 md:gap-8">
      <SelectFilter options={roleOptions} placeholder="Cargo" handleChange={handleChange} value={role} name="role"/>
      <button onClick={handleClick} className="w-full text-sm md:text-base bg-blueI text-whiteI py-2 px-8 md:py-3 md:px-12 rounded-lg">
        Todos
      </button>
      <Link className="font-bold text-xl bg-blueI py-2 px-4 text-whiteI rounded-full" href={'/dashboard/users/add'}>
        +
      </Link>

    </section>
  )
}
 
export default UsersFilters
