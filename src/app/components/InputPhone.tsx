import PhoneInput from 'react-phone-input-2'
import { noto } from '@/app/ui/fonts'
import 'react-phone-input-2/lib/style.css'

const InputPhone = ({ value, onChange, placeholder, errorMessage }: { value: string, onChange: (value: string) => void, placeholder: string, errorMessage: string }) => {
  return (
    <div className='flex flex-col w-full'>
      <label className='text-blueI text-sm'>{placeholder}</label>

      <PhoneInput
      country={'us'}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: false
      }}
      value={value}
      onChange={onChange}
      containerClass='!flex !flex-row-reverse'
      inputClass={`!outline-none !w-full ${noto.className} !text-base !py-5 !pl-2 !border-y-2 !border-r-2 !border-y-blueI !border-r-blueI !border-l-0 !rounded-r-lg !rounded-l-none !text-blueI !focus:text-whiteI !bg-white !focus:bg-blueI`}
      buttonClass='!static !py-2 !border-y-2 !bg-white !border-l-2 !border-y-blueI !border-l-blueI !border-r-0 !rounded-l-lg'
      dropdownClass={`${noto.className}`}
      />

      <label className='text-red-700 text-sm mt-1'>{errorMessage}</label>
    </div>
  )
}

export default InputPhone
