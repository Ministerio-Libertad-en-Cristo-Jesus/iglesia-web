'use client'
import Button from "@/app/components/Button"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const DashboardBox = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  })

  useEffect(() => {
    axios.get('/api/extractuser', { withCredentials: true })
      .then(res => {
        const { name, email, role } = res.data
        setUser({
          name,
          email,
          role
        })
      })
      .catch(err => {
        console.log(err)
        router.push('/login')
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = () => {
    axios.get('/api/logout', { withCredentials: true })
      .then(res => {
        console.log(res.data)
        router.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="flex flex-col gap-5 justify-center items-center border-2 border-blueI bg-white w-96 h-96">
      <p className="font-medium text-blueI text-lg text-center">Nombre: {user.name}</p>
      <p className="font-medium text-blueI text-lg text-center">Email: {user.email}</p>
      <p className="font-medium text-blueI text-lg text-center">Cargo: {user.role}</p>
      <Button text="Cerrar Sesión" dark={true} disabled={false} onClick={handleLogout} />
    </div>
  )
}
 
export default DashboardBox