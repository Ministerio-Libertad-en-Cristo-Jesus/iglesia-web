import ViewPasswordIcon from "@/app/components/componentSVG/ViewPasswordIcon"
import { useState } from "react"

const InputPassword = ({ value, placeholder, name}: { value: string, placeholder: string, name: string }) => {
  const [viewPassword, setViewPassword] = useState('password')
  const handleViewPassword = () => {
    if(viewPassword === 'password') {
      setViewPassword('text')
    } else {
      setViewPassword('password')
    }
  }
  return (
    <div className='flex flex-col items-start w-full'>
      <label className='text-blueI text-sm'>{placeholder}</label>
      <div className="flex w-full">
        <input
        className={`w-full outline-none rounded-l-lg border-y-2 border-l-2 border-y-blueI border-l-blueI py-2 pl-2 text-blueI bg-white transition-all duration-200`}
        name={name}
        value={value}
        placeholder={placeholder}
        type={viewPassword} readOnly />
        <div className={`bg-white py-2 pr-2 border-y-2 border-r-2 border-y-blueI border-r-blueI rounded-r-lg`}>
          <ViewPasswordIcon onClick={handleViewPassword} visiblePass={viewPassword === 'password'} />
        </div>
      </div>
    </div>
  )
}
 
export default InputPassword
