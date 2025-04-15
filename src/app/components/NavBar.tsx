"use client"
import React, { ReactNode } from 'react'
import clinicLogo from '../../../public/clinicLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { createContext } from 'react'
import { useSelector,UseDispatch, useDispatch } from 'react-redux'
import { navItemActions } from '@/redux/navItemSlice'

type Props = {
children:ReactNode
}

const NavBar = ({children}: Props) => {
  return (
    <div className='w-full flex justify-between items-center py-[4px] px-[70px]  '>
            <div className='flex justify-start items-center gap-x-[2px]'>
                  <Image src={clinicLogo} alt='' className='w-[70px] h-[70px] border border-3' />
                  <h1 className='text-blue-800 font-semibold text-lg'>AY- <span className=''>clinic</span></h1>
                  <div className='flex justify-start items-center gap-x-[20px] pl-[60px]'>
                     {children}
                  </div>
            </div>
            
            <Link href={'/'} className='lg:px-[14px] lg:py-[6px] rounded-lg font-semibold text-md bg-blue-800 text-white hover:bg-blue-600'>
                 Login
            </Link>
    </div>
  )
}

export default NavBar

export const NavItem=({item}:{item:string})=>{
    const dispatch=useDispatch();
    const itemName=useSelector((state:any)=>state.navItem.name)
    return <div className={`text-lg font-semibold ${itemName==item ?'text-blue-800':'text-gray-800'} cursor-pointer hover:text-gray-600` } onClick={()=>{dispatch(navItemActions.updateItem(item))}}>
        {item}
    </div>
}