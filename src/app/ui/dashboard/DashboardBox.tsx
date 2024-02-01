import { extractUser } from "../../lib/actions/extractUser"

const DashboardBox = async () => {
  const user = await extractUser()

  return (
    <div className="flex flex-col gap-5 justify-center items-center border-2 border-blueI bg-white w-96 h-96">
      <p className="font-medium text-blueI text-lg text-center">Nombre: {user.name}</p>
      <p className="font-medium text-blueI text-lg text-center">Email: {user.email}</p>
      <p className="font-medium text-blueI text-lg text-center">Cargo: {user.role}</p>
    </div>
  )
}
 
export default DashboardBox