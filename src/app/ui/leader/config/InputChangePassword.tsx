import ViewPasswordIcon from "@/app/components/componentSVG/ViewPasswordIcon";
import { type InputType } from "@/app/lib/definitions";
import { useState } from "react";

const InputChangePassword = ({ value, onChange, placeholder, name, error, errorMessage, min, max }: InputType) => {
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
        min={min}
        max={max}
        className={`w-full outline-none rounded-l-lg border-y-2 border-l-2 ${error ? 'border-y-red-700 border-l-red-700' : 'border-y-blueI border-l-blueI'} py-2 pl-2 text-blueI bg-white transition-all duration-200`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={viewPassword} />
        <div className={`bg-white py-2 pr-2 border-y-2 border-r-2 ${error ? 'border-y-red-700 border-r-red-700' : 'border-y-blueI border-r-blueI'} rounded-r-lg`}>
          <ViewPasswordIcon onClick={handleViewPassword} visiblePass={viewPassword === 'password'} />
        </div>
      </div>

      <label className={`font-semibold text-sm ${errorMessage === 'Insegura' ? 'text-red-700 bg-red-300' : errorMessage === 'Aceptable' ? 'text-orange-700 bg-orange-300' : errorMessage === 'Segura' ? 'text-green-700 bg-green-300' : 'text-red-700 bg-red-300'} rounded-lg ${errorMessage === '' ? 'hidden' : ''} px-3 py-1 text-sm mt-1`}>{errorMessage}</label>
    </div>
  )
}
 
export default InputChangePassword;