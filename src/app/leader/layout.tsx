import { Suspense } from "react";
import HeaderLeader from "../ui/leader/HeaderLeader";
import Sidebar from "../ui/leader/Sidebar";
import Loading from "../components/Loading";

const LeaderLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex w-full min-h-screen h-screen p-8 gap-8">
      <Sidebar />
      <div className="flex flex-col w-full min-h-full bg-grayI rounded-xl px-16 py-12 gap-8">
        <HeaderLeader />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </div>
    </div>
  )
}
 
export default LeaderLayout;