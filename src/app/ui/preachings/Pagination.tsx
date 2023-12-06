import { useRouter } from 'next/navigation'
import Button from '../../components/Button'

interface Props {
  page: number
  maxPage: number
}

const Pagination = ({ page, maxPage }: Props) => {
  const router = useRouter()
  return (
    <nav className="flex w-full items-center justify-center mt-10 lg:mt-24 gap-5">
      <Button text="Prev" dark={false} onClick={() => { router.push(`/preachings/${page - 1}`) }} disabled={page === 1} />
      <p className='font-noto text-blueI'>{page} / {maxPage}</p>
      <Button text="Next" dark={false} onClick={() => { router.push(`/preachings/${page + 1}`) }} disabled={page === maxPage} />
    </nav>
  )
}

export default Pagination
