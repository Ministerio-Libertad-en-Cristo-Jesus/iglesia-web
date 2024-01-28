'use client'
import SelectFilter from "@/app/components/SelectFilter"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const HeaderArticle = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [type, setType] = useState('')
  const typeOptions = [
    { value: 'news', text: 'Noticia' },
    { value: 'preach', text: 'Prédica' }
  ]

  const params = new URLSearchParams(searchParams)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    const { name, value } = e.target
    if (name === 'type') {
      if (value === '') {
        params.delete('type')
      } else {
        params.set('type', value)
        setType(value)
        replace(`${pathname}?${params}`)
      }
    }
  }

  const handleClick = () => {
    setType('')
    replace('/dashboard/articles')
  }
  return (
    <section className="flex flex-col md:flex-row w-full items-end gap-4 sm:gap-6 md:gap-8">
      <SelectFilter options={typeOptions} placeholder="Tipo de articulo" handleChange={handleChange} value={type} name="type"/>
      <button onClick={handleClick} className="w-full text-sm md:text-base bg-blueI text-whiteI py-2 px-8 md:py-3 md:px-12 rounded-lg">
        Todos
      </button>
      <Link className="font-bold text-xl bg-blueI py-2 px-4 text-whiteI rounded-full" href={'/dashboard/articles/createarticle'}>
        +
      </Link>
    </section>
  )
}
 
export default HeaderArticle
