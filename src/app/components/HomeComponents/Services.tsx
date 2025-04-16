"use client"
import React,{ReactNode} from 'react'
import Image from 'next/image'
import clinicLogo from '../../../../public/clinicLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import ServiceActions from '../../../redux/ClinicServiceSlice'

const Services = ({children}: {children:ReactNode}) => {
  return (
    <div className='w-full lg:px-[70px]  lg:pt-[20px]'>
        <div className='flex justify-center items-center lg:gap-x-[10px] w-full'>
            <Image src={clinicLogo} alt='' className='lg:w-[60px] lg:h-[60px]' />
            <h1 className='font-bold lg:text-xl text-blue-700'>Our Services</h1>
        </div>
        <div className='flex justify-center items-center gap-x-[50px] lg:pt-[20px] w-[70%] mx-auto'>
        {children}

        </div>
    </div>
  )
}

export default Services

export const ServiceItem=({children,information,index}:{children:ReactNode,information:string,index:number})=>{
    const service=useSelector((state:any)=>state.service.service)
    const dispatch=useDispatch();
    return <div className={`col-span-1 flex flex-col justify-center items-center lg:gap-y-[10px] rounded-tr-xl rounded-bl-xl   lg:pt-[15px] cursor-pointer ${service==index?'bg-blue-500 text-white':'text-blue-500'} lg:px-[15px]`} onClick={()=>{dispatch(ServiceActions.actions.updateService(index))}}>
             <div className={`${service==index?' text-white':'text-blue-500'} `}>{children}</div>
         <h1 className='font-bold '>{information}</h1>
    </div>
}