import { extractTaskById } from "@/app/lib/actions/extractTasksById"
import CardTask from "./CardTask"
import TaskFilters from "@/app/ui/dashboard/tasks/TaskFilters"

const TasksUser = async ({ importance, status, search, id }: { importance: string, status: string, search: string, id: string }) => {
  const tasks = await extractTaskById(importance, status, search, id)
  
  return (
    <div className="flex flex-col w-full gap gap-6 md:gap-8">
      <TaskFilters />
      <hr className="border-blueI" />
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
            importance={task.importance}
            idOwner={id}
            roleAuthor={task.roleAuthor}
            />
          ) 
        })
        :
        <h3 className="font-bold text-lg text-center text-blueI">No hay tareas pendientes</h3>
        }
      </div>
    </div>
  )
}
 
export default TasksUser
