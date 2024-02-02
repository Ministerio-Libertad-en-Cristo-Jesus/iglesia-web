'use client'
import { type Dispatch, type SetStateAction } from 'react'
import List from './List'
import MenuIcon from '@/app/components/componentSVG/menu'
import Link from 'next/link'
import { list1, list2 } from './listsInfo'
import LogoBlue from '@/app/components/componentSVG/LogoBlue'

interface Props {
  openSidePanel: boolean
  setOpenSidePanel: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ openSidePanel, setOpenSidePanel }: Props) => {
  const listStyles = 'gap-12 items-center hidden xl:flex'
  const linksStyles = 'font-medium text-lg text-whiteI hover:text-yellow-500 transition-all duration-200'

  return (
    <header className='flex fixed top-0 z-[44] w-screen justify-center items-center px-28 h-20 bg-blueI'>

      <div className='flex items-center justify-center w-full max-w-[1440px]'>
        <List items={list1} listStyle={listStyles} itemStyle={linksStyles} />

        <Link className='mt-16 lg:mt-20 mx-10' href='/'>
          <LogoBlue />
        </Link>

        <List items={list2} listStyle={listStyles} itemStyle={linksStyles} />
      </div>

      <button
      onClick={() => {
        openSidePanel ? setOpenSidePanel(false) : setOpenSidePanel(true)
      }}
      className='absolute right-8 lg:right-14 stroke-whiteI hover:stroke-yellow-500 transition-all duration-200 hover:cursor-pointer xl:hidden'>
        <MenuIcon />
      </button>

    </header>
  )
}

export default Navbar
