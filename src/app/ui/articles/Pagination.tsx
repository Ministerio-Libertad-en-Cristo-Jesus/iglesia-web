import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Button from '../../components/Button'

interface Props {
  count: number
}

const Pagination = ({ count }: Props) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page") || '1'

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 6

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count
  const maxPage = Math.ceil(count / ITEM_PER_PAGE)

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString())
    replace(`${pathname}?${params}`)
  }

  return (
    <nav className="flex w-full items-center justify-center mt-10 lg:mt-24 gap-5">
      <Button text="Prev" dark={false} onClick={() => {handleChangePage('prev')}} disabled={!hasPrev} />
      <p className='font-noto text-blueI'>{page} / {maxPage}</p>
      <Button text="Next" dark={false} onClick={() => {handleChangePage('next')}} disabled={!hasNext} />
    </nav>
  )
}

export default Pagination
