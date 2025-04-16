import React, { ReactNode } from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

type Props = {}

const ServicesDeatlis = ({children}: {children:ReactNode}) => {
  return (
    <div className='lg:w-[70%] mx-auto lg:mt-[30px] ' >
        {children}
    </div>
  )
}

export default ServicesDeatlis


export const Service=({title,description,children,index}:{title:string,description:string,children:ReactNode,index:number})=>{
    const service =useSelector((state:any)=>state.service.service)
    return <div className={` justify-start items-start rounded-xl ${index==service?'flex':'hidden'} w-full  `}>
        {children}
              <div className=' lg:pt-[10px] lg:px-[30px] w-full flex flex-col gap-y-[8px] justify-start '>
                  <h1 className='font-bold lg:text-2xl'>{title}</h1>
                  <h3 className='text-sm font-light text-gray-600'>{description}</h3>
              </div>
    </div>
}