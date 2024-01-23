import { Suspense } from "react"
import UserCard from "../ui/leader/UserCard"
import LoadingDashboard from "../components/LoadingDashboard"

const Leader = () => {
  return (
    <Suspense fallback={<LoadingDashboard />}>
      <UserCard />
    </Suspense>
  )
}
 
export default Leader