import { type Dispatch, type SetStateAction } from 'react'
import CloseIcon from '../../../components/componentSVG/close'

interface Props {
  setOpenSidePanel: Dispatch<SetStateAction<boolean>>
  openSidePanel: boolean
}

const HeaderSidePanel = ({ setOpenSidePanel, openSidePanel }: Props) => {

  return (
    <header className='flex justify-between my-5 mx-5 pb-4 border-b border-b-blueI'>
      <p className='font-bold text-2xl text-blueI'>Menú</p>
      <button onClick={() => {
        openSidePanel ? setOpenSidePanel(false) : setOpenSidePanel(true)
      }}>
        <CloseIcon />
      </button>
    </header>
  )
}

export default HeaderSidePanel
