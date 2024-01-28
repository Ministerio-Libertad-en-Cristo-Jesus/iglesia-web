interface Option {
  value: string
  text: string
}

interface Props {
  options: Option[]
  placeholder: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectFilter = ({ options, name, value, handleChange, placeholder }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label className='text-blueI text-sm'>{placeholder}</label>
      <select
      className={`text-sm md:text-base outline-none rounded-lg border md:border-2 border-blueI hover:bg-blue py-1 md:py-2 pl-2 text-blueI focus:text-whiteI bg-white hover:cursor-pointer focus:bg-blueI transition-all duration-200`}
      name={name}
      value={value}
      onChange={handleChange}>
        <option value="" hidden>{placeholder}</option>
        {
          options.map((option, index) =>
            <option key={index} value={option.value}>{option.text}</option>
          )
        }
      </select>
    </div>
  )
}

export default SelectFilter
