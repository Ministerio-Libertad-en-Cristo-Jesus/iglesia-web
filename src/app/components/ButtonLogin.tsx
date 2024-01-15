interface Props {
  text: string
  dark: boolean
  disabled: boolean
  type: 'submit' | 'reset' | 'button'
}

const ButtonLogin = ({ text, dark, type, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`rounded-lg font-medium text-base w-full py-2 px-8 lg:font-semibold ${dark
        ? 'bg-blueI text-whiteI '
        : 'bg-whiteI text-blueI'} disabled:opacity-60 disabled:hover:bg-whiteI disabled:hover:text-blueI transition-all duration-200`}>
      {text}
    </button>
  )
}
 
export default ButtonLogin