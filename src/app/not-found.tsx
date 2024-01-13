'use client'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/Button'

const NotFound = () => {
  const router = useRouter()
  return (
    <section className="flex flex-col justify-center items-center w-full mt-56 py-32">
      <h3 className="font-black text-center text-blueI px-12 mb-6 text-2xl sm:text-4xl">Ops! Esta pagina no existe</h3>
      <Button text="Ir a Inicio" dark={false} onClick={() => { router.push('/') }} />
    </section>
  )
}

export default NotFound
