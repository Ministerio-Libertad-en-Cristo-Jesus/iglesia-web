import LoadingDashboard from "@/app/components/LoadingDashboard"
import UsersFilters from "@/app/ui/dashboard/users/UsersFilters"
import UsersTable from "@/app/ui/dashboard/users/UsersTable"
import { Suspense } from "react"

const Users = ({ searchParams }: { searchParams: { search?: string, page?: string, role?: string } }) => {
  const search = searchParams?.search || ''
  const role = searchParams?.role || ''
  const page = searchParams?.page !== undefined ? parseInt(searchParams.page) : undefined || 1
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <UsersFilters />
      <hr className="border-blueI" />
      <Suspense fallback={<LoadingDashboard />}>
        <UsersTable search={search} page={page} role={role} />
      </Suspense>
    </div>
  )
}
 
export default Users
