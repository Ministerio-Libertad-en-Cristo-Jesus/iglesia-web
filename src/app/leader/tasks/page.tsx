import Cards from "@/app/ui/leader/tasks/Cards"
import TaskFilters from "@/app/ui/leader/tasks/TaskFilters"

const Task = ({ searchParams }: { searchParams: { importance: string, status: string, search: string } }) => {
  const importance = searchParams.importance || ''
  const status = searchParams.status || ''
  const search = searchParams.search || ''
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-grayII gap-8 rounded-xl">
      <TaskFilters />
      <Cards status={status} importance={importance} search={search}  />
    </div>
  )
}
 
export default Task