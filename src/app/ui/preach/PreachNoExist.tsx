import { useRouter } from 'next/navigation'
import Button from '../../components/Button'

const PreachNoExist = () => {
  const router = useRouter()
  return (
    <section className="flex flex-col justify-center items-center w-full mt-36 py-32">
      <h3 className="font-black text-center text-blueI px-12 mb-6 text-2xl sm:text-4xl">Ops! Esta enseñanza no existe</h3>
      <Button text="Ir a Enseñanzas" dark={false} onClick={() => { router.push('/preachings') }} />
    </section>
  )
}

export default PreachNoExist
