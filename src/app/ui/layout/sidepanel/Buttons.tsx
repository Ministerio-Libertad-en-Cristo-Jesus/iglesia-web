import { type Dispatch, type SetStateAction } from 'react'
import { type ButtonSidepanelProps } from '../../../lib/definitions'
import Button from './Button'

interface Props {
  buttons: ButtonSidepanelProps[]
  setOpenSidePanel: Dispatch<SetStateAction<boolean>>
  openSidePanel: boolean
}

const Buttons = ({ buttons, setOpenSidePanel, openSidePanel }: Props) => {
  return (
    <nav className='pb-16'>
      {buttons.map((button, index) => (
        <Button svg={button.svg} name={button.name} rute={button.rute} key={index} openSidePanel={openSidePanel} setOpenSidePanel={setOpenSidePanel} />
      ))}
    </nav>
  )
}

export default Buttons
