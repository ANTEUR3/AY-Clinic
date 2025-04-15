"use client"
import React from 'react'
import Link from 'next/link'
import ClinicFeatures, { Feature } from './ClinicFeatures'
import doctor from '../../../../public/doctor.png'
import Image from 'next/image'
import Media, { MediaItem } from './Media'
import { FaXTwitter ,FaInstagram,FaFacebook ,FaPhone} from 'react-icons/fa6';

type Props = {}

const Landing = (props: Props) => {
  return (
    <div className='h-[530px] w-[92%] mx-auto bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 rounded-xl pt-[100px] lg:px-[90px] flex flex-col gap-y-[15px] relative '>
         <div className='lg:text-4xl text-white w-[35%]  font-bold flex flex-col gap-y-[12px]  '>
             <h1 className='font-black'> The Best Medical</h1>
             <h1>and Tratment center</h1> 
              <h1>for you</h1> 
         </div>
         <div className='w-[32%] text-sm text-gray-300 font-bold  '>
              We understand that and acute pain can happen unexpectly , Our energy         
         </div>
         <Link href={'/'} className=' lg:py-[6px] bg-white text-black  rounded-lg w-[18%] flex justify-center flex-col items-center font-semibold text-blue-400 text-sm'>
            Make appointment
         </Link>
         <ClinicFeatures>
            <Feature number={'24/7'} information='Emergency Services' />
            <Feature number={'80+'} information='Spetialist Doctor' />
            <Feature number={'100K+'} information='Happy Patient' />
          </ClinicFeatures>

          <Media>
           <MediaItem ref={''} >
             <FaXTwitter className='text-3xl'/>
            </MediaItem>
            <MediaItem ref={''} >
             <FaInstagram className='text-3xl'/>
            </MediaItem>
            <MediaItem ref={''} >
             <FaFacebook className='text-3xl'/>
            </MediaItem>
            <MediaItem ref={''} >
             <FaPhone className='text-3xl'/>
            </MediaItem>
          </Media>

          <Image src={doctor} alt='' className='lg:w-[400px] lg:h-[400px] absolute top-[80px] right-[170px]' />
         
    </div>
  )
}


export default Landing