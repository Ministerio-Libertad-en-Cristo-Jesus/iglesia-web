import { fetchUsers } from "@/app/lib/actions/fetchUsers"
import Pagination from "./Pagination"
import Link from "next/link"
import { deleteUser } from "@/app/lib/actions/deleteUser"

const UsersTable = async ({ search, page, role }: { search: string, page: number, role: string }) => {
  const { users, count } = await fetchUsers(search, page ,role)
  return (
    <div className="flex flex-col w-full gap-8">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blueI border-b border-blueI">
            <th className="py-3 px-3 text-start text-whiteI">Nombre</th>
            <th className="py-3 px-3 text-start text-whiteI">Email</th>
            <th className="py-3 px-3 text-start text-whiteI">Teléfono</th>
            <th className="py-3 px-3 text-start text-whiteI">Cargo</th>
            <th className="py-3 px-3 text-start text-whiteI">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user._id} className="border-b border-blueI hover:bg-grayI">
                <td className="py-3 px-3 text-blueI">{user.name}</td>
                <td className="flex py-3 px-3 text-blueI whitespace-nowrap">{user.email}</td>
                <td className="py-3 px-3 text-blueI">{user.phone}</td>
                <td className="py-3 px-3 text-blueI">{user.role === 'pastor' ? 'Pastor' : 'Lider'}</td>
                <td className="flex items-center py-3 px-3 gap-3">
                  <Link
                  className="bg-blueI py-1 px-4 text-whiteI text-xs rounded-lg"
                  href={`/dashboard/users/${user._id}`}
                  >
                    Ver
                  </Link>
                  <form className="flex items-center" action={deleteUser}>
                    <input className="hidden" name="id" type="text" value={JSON.parse(JSON.stringify(user._id))} readOnly />
                    <button className="bg-red-800 py-1 px-4 text-whiteI text-xs rounded-lg">Eliminar</button>
                  </form>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
 
export default UsersTable
