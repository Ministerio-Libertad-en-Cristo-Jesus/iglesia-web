import Image from "next/image"

interface Props {
  headerImg: string
}

const HeaderPreach = ({ headerImg }: Props) => {
  return (
    <section className='flex relative justify-center'>

      <div className='w-full h-[450px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <Image
      width={1440}
      height={700}
      className='w-screen h-[450px] object-cover max-w-[1440px]'
      src={headerImg}
      alt="headerImage"
      />

    </section>
  )
}

export default HeaderPreach
