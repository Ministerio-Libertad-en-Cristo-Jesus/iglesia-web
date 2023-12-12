interface Props {
  text: string[]
}
const ContentText = ({ text }: Props) => {
  return (
    <div className="flex flex-col w-full gap-8">
      {
        text.map((item, index) => (
          <p className='font-noto font-normal text-blueI text-base' key={index}>{item}</p>
        ))
      }
    </div>
  )
}
 
export default ContentText;