"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page") || '1'

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 4

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count
  const maxPage = Math.ceil(count / ITEM_PER_PAGE)

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString())
    replace(`${pathname}?${params}`)
  };

  return (
    <div className='flex w-full justify-between items-center'>
      <button
        className='bg-blueI text-xs text-whiteI py-1 px-3 rounded disabled:opacity-70 disabled:cursor-not-allowed'
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previo
      </button>
      <p className="text-blueI text-sm">{`${page}/${maxPage}`}</p>
      <button
        className='bg-blueI text-xs text-whiteI py-1 px-3 rounded disabled:opacity-70 disabled:cursor-not-allowed'
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Pagination
