import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon"
import CreateTaskForm from "@/app/ui/dashboard/tasks/createtask/CreateTaskForm"
import Link from "next/link"

const CreateTask = () => {
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <div className="flex w-full justify-between items-center">
        <Link className="bg-blueI p-4 rounded-full" href='/dashboard/tasks'><ArrowBackIcon /></Link>
        <div>
          <h2 className="font-black text-blueI text-3xl text-end">Crear nueva Tarea</h2>
          <p className="text-blueI text-end">Ingresa los datos del nueva tarea</p>
        </div>
      </div>
      <hr className="border-blueI" />
      <CreateTaskForm />
    </div>
  )
}
 
export default CreateTask
