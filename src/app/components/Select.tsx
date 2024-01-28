interface Props {
  options: string[]
  placeholder: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ options, name, value, handleChange, placeholder }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label className='text-blueI text-sm'>{placeholder}</label>
      <select
      className={`outline-none rounded-lg border-2 ${value === '' ? 'border-red-800' : 'border-blueI'} hover:bg-blue py-2 pl-2   text-blueI focus:text-whiteI bg-white focus:bg-blueI transition-all duration-200`}
      name={name}
      value={value}
      onChange={handleChange}>
        <option value="" hidden>{placeholder}</option>
        {
          options.map((option, index) =>
            <option key={index} value={option}>{option}</option>
          )
        }
      </select>
    </div>
  )
}

export default Select
