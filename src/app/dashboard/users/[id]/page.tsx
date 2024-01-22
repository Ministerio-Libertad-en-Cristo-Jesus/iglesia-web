import HeaderUser from "@/app/ui/dashboard/users/user/HeaderUser"
import SectionSelector from "@/app/ui/dashboard/users/user/SectionSelector"
import AssingTaskForm from "@/app/ui/dashboard/users/user/assingTask/AssingTaskForm"
import TasksUser from "@/app/ui/dashboard/users/user/tasks/TasksUser"

const User = ({ params, searchParams }: { params: { id: string }, searchParams: { section: string, importance: string, status: string, search: string } }) => {
  const section = searchParams?.section || 'tasks'
  const importance = searchParams?.importance || ''
  const status = searchParams?.status || ''
  const search = searchParams?.search || ''
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <HeaderUser id={params.id} />
      <SectionSelector section={section}/>
      {
        section === 'tasks' && <TasksUser id={params.id} importance={importance} status={status} search={search} />
      }
      {
        section === 'createtask' && <AssingTaskForm id={params.id}/>
      }

    </div>
  )
}
 
export default User
