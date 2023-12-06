import { type Dispatch, type SetStateAction } from 'react'
import HeaderSidePanel from './header'
import Buttons from './Buttons'
import { buttonsArray } from './buttonsInfo'

interface Props {
  setOpenSidePanel: Dispatch<SetStateAction<boolean>>
  openSidePanel: boolean
}

const Sidepanel = ({ setOpenSidePanel, openSidePanel }: Props) => {

  return (
    <section onClick={() => {
      openSidePanel ? setOpenSidePanel(false) : setOpenSidePanel(true)
    }} className={`flex flex-row-reverse fixed top-0 z-50 backdrop-blur-sm ${openSidePanel ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all ease-in-out duration-300 bg-black/20 w-screen h-screen`}>
      <aside onClick={(e) => { e.stopPropagation() }} className={`bg-whiteI h-screen w-full sm:w-2/6 overflow-auto ${openSidePanel ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-in-out duration-500 min-w-[360px]`}>

        <HeaderSidePanel setOpenSidePanel={setOpenSidePanel} openSidePanel={openSidePanel} />
        <Buttons buttons={buttonsArray} setOpenSidePanel={setOpenSidePanel} openSidePanel={openSidePanel} />

      </aside>
    </section>
  )
}

export default Sidepanel
