import { type InputType } from "@/app/lib/definitions";

const InputChangePassword = ({ value, onChange, placeholder, name, error, errorMessage, type, min, max }: InputType) => {
  return (
    <div className='flex flex-col items-start w-full'>
      <label className='text-blueI text-sm'>{placeholder}</label>

      <input
      min={min}
      max={max}
      className={`w-full outline-none rounded-lg border-2 ${error ? 'border-red-700' : 'border-blueI'} py-2 pl-2   text-blueI focus:text-whiteI bg-white focus:bg-blueI transition-all duration-200`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type} />

      <label className={`font-semibold text-sm ${errorMessage === 'Insegura' ? 'text-red-700 bg-red-300' : errorMessage === 'Aceptable' ? 'text-orange-700 bg-orange-300' : errorMessage === 'Segura' ? 'text-green-700 bg-green-300' : 'text-red-700 bg-red-300'} rounded-lg ${errorMessage === '' ? 'hidden' : ''} px-3 py-1 text-sm mt-1`}>{errorMessage}</label>
    </div>
  )
}
 
export default InputChangePassword;