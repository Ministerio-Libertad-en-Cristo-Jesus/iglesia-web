import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon"
import FormAddUser from "@/app/ui/dashboard/users/addUser/FormAddUser"
import Link from "next/link"

const AddUser = () => {
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <div className="flex w-full justify-between items-center">
        <Link className="bg-blueI p-4 rounded-full" href='/dashboard/users'><ArrowBackIcon /></Link>
        <div>
          <h2 className="font-black text-blueI text-3xl text-end">Crear nuevo Usuario</h2>
          <p className="text-blueI text-end">Ingresa los datos del nuevo usuario</p>
        </div>
      </div>
      <FormAddUser />
    </div>
  )
}
 
export default AddUser
