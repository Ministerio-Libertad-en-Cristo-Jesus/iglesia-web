import { type TextAreaType } from '../types/types'

const TextArea = ({ value, onChange, placeholder, name, error, errorMessage }: TextAreaType) => {
  return (
    <div className='flex flex-col w-full'>
      <label className='  text-blueI text-sm'>{placeholder}</label>

      <textarea
      className={`outline-none min-h-[250px] rounded-lg border-2 ${error ? 'border-red-700' : 'border-blueI'} py-2 pl-2   text-blueI focus:text-whiteI bg-white focus:bg-blueI transition-all duration-200`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      />

      <label className='  text-red-700 text-sm mt-1'>{errorMessage}</label>
    </div>
  )
}

export default TextArea
