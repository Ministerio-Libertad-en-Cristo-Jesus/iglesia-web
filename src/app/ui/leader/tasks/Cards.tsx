import { extractTask } from "@/app/lib/extractTask"
import CardTask from "./CardTask"

const Cards = async ({ importance, status, search }: { importance: string, status: string, search: string }) => {
  const tasks = await extractTask(importance, status, search)
  
  return (
    <div className="flex flex-col w-full gap-8">
      {
      tasks[0] !== undefined ? 
      tasks.map((task, index) => {
        return (
          <CardTask
          key={index}
          id={task.id}
          author={task.author}
          title={task.title}
          description={task.description}
          status={task.status}
          importance={task.importance}/>
        ) 
      })
      :
      <h3 className="font-bold text-lg text-center text-blueI">No hay tareas pendientes</h3>
      }
    </div>
  )
}
 
export default Cards;