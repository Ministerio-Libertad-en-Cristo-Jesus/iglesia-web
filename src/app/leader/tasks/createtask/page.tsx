import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon"
import CreateTaskForm from "@/app/ui/leader/tasks/createtask/CreateTaskForm"
import Link from "next/link"

const CreateTask = () => {
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <div className="flex w-full justify-between items-center">
        <Link className="bg-blueI p-3 lg:p-4 rounded-full" href='/leader/tasks'><ArrowBackIcon /></Link>
        <div>
          <h2 className="font-black text-blueI text-xl lg:text-3xl text-end">Crear nueva Tarea</h2>
          <p className="text-blueI text-xs lg:text-base text-end">Ingresa los datos del nueva tarea</p>
        </div>
      </div>
      <hr className="border-blueI" />
      <CreateTaskForm />
    </div>
  )
}
 
export default CreateTask
