import Cards from "@/app/ui/dashboard/tasks/Cards"
import TaskFilters from "@/app/ui/dashboard/tasks/TaskFilters"

const Tasks = ({ searchParams }: { searchParams: { importance: string, status: string, search: string } }) => {
  const importance = searchParams.importance || ''
  const status = searchParams.status || ''
  const search = searchParams.search || ''
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-4 sm:p-6 md:p-8 bg-whiteI gap-6 md:gap-8 rounded-xl">
      <TaskFilters />
      <hr className="border-blueI" />
      <Cards status={status} importance={importance} search={search}  />
    </div>
  )
}
 
export default Tasks