'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center w-full mt-52 gap-10'>
      <h2 className='font-black text-blueI text-4xl'>¡Algo salió mal!</h2>
      <button
        className='font-semibold bg-blueI text-white rounded-md px-7 py-3'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentar de nuevo
      </button>
    </div>
  )
}