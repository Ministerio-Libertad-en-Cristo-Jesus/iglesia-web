import Link from "next/link"

const ButtonLogin = () => {
  return (
    <Link href='/dashboard' className="bg-gray-300 border font-semibold text-blueI border-gray-400 py-1 mt-16 px-4 rounded-md">
      Dashboard
    </Link>
  )
}
 
export default ButtonLogin
