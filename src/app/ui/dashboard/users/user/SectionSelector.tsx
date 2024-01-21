'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SectionSelector = ({ section }: { section: string }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const styleButton = 'w-full text-sm py-2 rounded-t-lg hover:bg-blueI hover:text-whiteI transition-all duration-200'

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    const params = new URLSearchParams(searchParams)
    params.set('section', name)
    replace(`${pathname}?${params}`)
  }
  return (
    <div className="flex w-full border-b border-b-blueI">
      <button onClick={handleClick} name="tasks" className={`${section === 'tasks' ? 'bg-blueI text-whiteI' : 'bg-whiteI text-blueI'} ${styleButton}`}>Tareas</button>
      <button onClick={handleClick} name="createtask" className={`${section === 'createtask' ? 'bg-blueI text-whiteI' : 'bg-whiteI text-blueI'} ${styleButton}`}>Asignar Tarea</button>
      <button onClick={handleClick} name="respassword" className={`${section === 'respassword' ? 'bg-blueI text-whiteI' : 'bg-whiteI text-blueI'} ${styleButton}`}>Res. Contraseña</button>
      <button onClick={handleClick} name="updateinfo" className={`${section === 'updateinfo' ? 'bg-blueI text-whiteI' : 'bg-whiteI text-blueI'} ${styleButton}`}>Cambiar información</button>
    </div>
  )
}
 
export default SectionSelector
