import { useRouter } from 'next/navigation'
import Button from '../../components/Button'

const PreachNoExist = () => {
  const router = useRouter()
  return (
    <section className="flex flex-col justify-center items-center w-full h-[600px]">
      <h3 className="font-black text-blueI mb-6 text-4xl">Ops! Esta enseñanza no existe</h3>
      <Button text="Ir a Enseñanzas" dark={false} onClick={() => { router.push('/preachings') }} />
    </section>
  )
}

export default PreachNoExist
