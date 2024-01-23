'use client'
import SelectFilter from "@/app/components/SelectFilter"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const TaskFilters = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const [priority, setPriority] = useState('')
  const [status, setStatus] = useState('')
  const priorityOptions = [
    { value: 'low', text: 'Prioridad Baja' },
    { value: 'mid', text: 'Prioridad Media' },
    { value: 'high', text: 'Prioridad Alta' }
  ]
  const statusOptions = [
    { value: 'not_started', text: 'No Iniciada' },
    { value: 'in_progress', text: 'En Proceso' },
    { value: 'completed', text: 'Completada' }
  ]

  const params = new URLSearchParams(searchParams)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    const { name, value } = e.target
    if (name === 'prioriry') {
      if (value === '') {
        params.delete('importance')
      } else {
        params.set('importance', value)
        setPriority(value)
        replace(`${pathname}?${params}`)
      }
    } else {
      if (value === '') {
        params.delete('status')
      } 
      else {
        params.set('status', value)
        setStatus(value)
        replace(`${pathname}?${params}`)
      }
    }
  
    }

  const handleClick = () => {
    setPriority('')
    setStatus('')
    replace('/leader/tasks')
  }
  return (
    <section className="flex flex-col md:flex-row w-full items-end gap-4 sm:gap-6 md:gap-8">
      <SelectFilter options={priorityOptions} placeholder="Prioridad" handleChange={handleChange} value={priority} name="prioriry"/>
      <SelectFilter options={statusOptions} placeholder="Status" handleChange={handleChange} value={status} name="status"/>
      <button onClick={handleClick} className="w-full text-sm md:text-base bg-blueI text-whiteI py-2 px-8 md:py-3 md:px-12 rounded-xl">
        Todas
      </button>
      <Link className="font-bold text-xl bg-blueI py-2 px-4 text-whiteI rounded-full" href={'/leader/tasks/createtask'}>
        +
      </Link>
    </section>
  )
}
 
export default TaskFilters