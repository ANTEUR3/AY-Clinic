"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import ClinicLogo from '../../../public/clinicLogo.png'
import Image from 'next/image'
import { doctorsData } from '../components/HomeComponents/Doctors'
type Props = {}

const page = (props: Props) => {
    const [Email,setEmail]=useState<string | null>(null)
    const [Password,setPassword]=useState<string | null>(null)
    const router=useRouter()

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const doctor =doctorsData.find(doctor=>doctor.Email==Email&& doctor.password==Password)
        if(doctor){
            router.push('/Doctor');
        }else{
            console.log('doctor not found')
        }

    }

  return (
    <div className='w-[40%]  mx-auto flex flex-col lg:gap-y-[5px] justify-start items-center lg:py-[90px]'>
          <Image src={ClinicLogo} className='lg:w-[120px] lg:h-[90px] mx-auto' alt="" />
          <h1 className='lg:text-2xl font-semibold text-blue-500'>Sign in to your account</h1>
          <form onSubmit={handleSubmit} action="" className='lg:pt-10 w-full flex flex-col lg:gap-y-5 -translate-y-[20px]'>
             <div className='flex flex-col justify-start items-start lg:gap-y-[10px]'>
                <label className='font-semibold' htmlFor="Email">Email address</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className='w-full px-5 py-1 rounded-lg border-gray-500 border' />
             </div>
             <div className='flex flex-col justify-start items-start lg:gap-y-[5px]'>
                <label className='font-semibold' htmlFor="Email">Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className='w-full px-5 py-1 rounded-lg border-gray-500 border' />
             </div>
             <button className='hover:bg-blue-300 cursor-pointer w-full bg-blue-500 rounded-lg text-white lg:py-2 text-xl font-semibold'>Sign in</button>
          </form>
    </div>
  )
}

export default page