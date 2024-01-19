'use client'
import SelectFilter from "@/app/components/SelectFilter"
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
    <section className="flex w-full items-end gap-8">
      <SelectFilter options={priorityOptions} placeholder="Prioridad" handleChange={handleChange} value={priority} name="prioriry"/>
      <SelectFilter options={statusOptions} placeholder="Status" handleChange={handleChange} value={status} name="status"/>
      <button onClick={handleClick} className="bg-blueI text-whiteI py-3 px-12 rounded-xl">
        Todas
      </button>
    </section>
  )
}
 
export default TaskFilters