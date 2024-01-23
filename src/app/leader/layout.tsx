import HeaderLeader from "../ui/leader/HeaderLeader"
import Sidebar from "../ui/leader/Sidebar"

const LeaderLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main className="flex flex-col md:flex-row w-screen h-auto md:h-[100dvh] p-6 gap-6 md:p-8 md:gap-8">
      <Sidebar />
      <section className="flex flex-col w-full h-full bg-white rounded-xl px-8 py-8 gap-6 md:px-16 md:py-12 md:gap-8">
        <HeaderLeader />
        {children}
      </section>
    </main>
  )
}
 
export default LeaderLayout
