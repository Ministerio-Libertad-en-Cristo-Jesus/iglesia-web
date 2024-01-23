import { Suspense } from "react"
import UserCard from "../ui/dashboard/UserCard"
import LoadingDashboard from "../components/LoadingDashboard"

const Dashboard = () => {
  return (
    <Suspense fallback={<LoadingDashboard />}>
      <UserCard />
    </Suspense>
  )
}
 
export default Dashboard