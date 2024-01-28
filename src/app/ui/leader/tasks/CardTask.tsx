import VerifiedIcon from "@/app/components/componentSVG/VerifiedIcon"
import { updateTaskStatus } from "@/app/lib/actions/updateTaskStatus"
interface Props {
  id: string
  author: string
  roleAuthor: string
  title: string
  importance: string
  status: string
  description: string
}

const CardTask = ({ author, title, importance, status, description, id, roleAuthor }: Props) => {
  const priority = importance === 'high' ? 'Prioridad Alta' : importance === 'mid' ? 'Prioridad Media' : 'Prioridad Baja'
  return (
    <article className="flex flex-col items-start w-full rounded-xl bg-white border-2 border-blueI p-4 gap-4 md:gap-2">
      <p className="flex text-xs text-gray-700 gap-1">Asignada por: {author} <VerifiedIcon admin={roleAuthor === 'pastor'} small={true} /></p>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
        <div className={`w-full md:w-4 h-4 ${status === 'not_started' ? 'bg-red-600' : status === 'in_progress' ? 'bg-orange-600' : 'bg-green-600'} rounded-full`}></div>
        <h3 className="font-black text-lg md:text-2xl text-blueI">{title}</h3>
        <p className={`w-full md:w-auto text-white text-xs sm:text-sm ${importance === 'high' ? 'bg-red-600' : importance === 'mid' ? 'bg-orange-600' : 'bg-green-600'} py-1 px-3 rounded-xl`}>{priority}</p>
      </div>
      <p className="text-sm sm:text-base text-blueI">{description}</p>
      <form action={updateTaskStatus}>
        <input id="status" className="hidden" type="text" name="status" value={JSON.parse(JSON.stringify(status))} readOnly />
        <input id="id-value" className="hidden" type="text" name="id" value={JSON.parse(JSON.stringify(id))} readOnly />
        <button className="text-sm bg-blueI py-1 px-4 rounded-lg text-whiteI">
          {status === 'not_started'
          ? 'Cambiar status a En proceso'
          : status === 'in_progress'
          ? 'Cambiar status a Completado'
          : 'Borrar tarea'}
          </button>
      </form>
    </article>
  )
}
 
export default CardTask
