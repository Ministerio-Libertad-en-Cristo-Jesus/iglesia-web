import { type Dispatch, type SetStateAction, type MouseEvent } from 'react'

interface Props {
  role: string
  setRole: Dispatch<SetStateAction<string>>
  setMessage: Dispatch<SetStateAction<string>>
}

const RoleSelector = ({ role, setRole, setMessage }: Props) => {
  const handleClick = (e: MouseEvent<HTMLParagraphElement>) => {
    setMessage('')
    const role = e.currentTarget.innerText
    role === 'Pastor' ? setRole('pastor') : setRole('lider')
  }
  return (
    <div className="flex w-full gap-7">
      <p onClick={handleClick} className={`font-medium text-sm text-center rounded-lg ${role === 'pastor' ? 'bg-blueI text-whiteI' : 'text-blueI'} border border-blueI py-1 w-full hover:cursor-pointer`}>Pastor</p>
      <p onClick={handleClick} className={`font-medium text-sm text-center rounded-lg ${role === 'lider' ? 'bg-blueI text-whiteI' : 'text-blueI'} border border-blueI py-1 w-full hover:cursor-pointer`}>Líder</p>
    </div>
  )
}
 
export default RoleSelector