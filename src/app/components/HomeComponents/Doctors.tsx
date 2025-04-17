"use client"
import React,{ReactNode, useMemo} from 'react'
import Image from 'next/image'
import ClinicLogo from '../../../../public/clinicLogo.png'
import { doctorType } from '@/type'
import { DocumentType } from 'next/dist/shared/lib/utils'
import { CiLocationOn,CiStar } from "react-icons/ci";
import { FaRankingStar } from "react-icons/fa6";
import Link from 'next/link'

type Props = {}

export const doctorsData=[
    {
      id: "doc001",
      name: "Dr. Amina Benali",
      image: "https://i.pinimg.com/736x/25/6b/ca/256bca9eb52db1239cd9c173862e7724.jpg",
      spesialization: "Cardiologist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'female',
      location:'Chlef',
      age: 45
    },
    {
      id: "doc002",
      name: "Dr. Khaled Bouzid",
      image: "https://i.pinimg.com/736x/22/3c/3e/223c3e0b8a49287257b15bdb4d3fd327.jpg",
      spesialization: "Dermatologist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'male',
      location:'Chlef',  
      age: 38
    },
    {
      id: "doc003",
      name: "Dr. Fatima Zohraoui",
      image: "https://i.pinimg.com/736x/e7/c2/cc/e7c2cc8ff954804f7fa47c0605a16e39.jpg",
      spesialization: "Pediatrician",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'female',
      location:'Chlef',
      age: 52
    },
    {
      id: "doc004",
      name: "Dr. Samir Hamidi",
      image: "https://i.pinimg.com/736x/18/dc/3f/18dc3f74a718b8e86a2b39628c182d7a.jpg",
      spesialization: "Neurologist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'male',
      location:'Chlef',   
      age: 41
    },
    {
      id: "doc005",
      name: "Dr. Nadia Khelifi",
      image: "https://i.pinimg.com/736x/3f/38/f0/3f38f0be9dfb50d4339fe8842319d851.jpg",
      spesialization: "Ophthalmologist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'female',
      location:'Chlef',
      age: 35
    },
    {
      id: "doc006",
      name: "Dr. Ali Mekki",
      image: "https://i.pinimg.com/736x/91/1b/87/911b876618490c6651a49c052feb285c.jpg",
      spesialization: "Orthopedic Surgeon",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'male',
      location:'Chlef',  
      age: 48
    },
    {
      id: "doc007",
      name: "Dr. Sarah Belkacem",
      image: "https://i.pinimg.com/736x/1b/88/2d/1b882df355bbe09f59873c091eb225a2.jpg",
      spesialization: "Gynecologist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'female',
      location:'Chlef',
      age: 39
    },
    {
      id: "doc008",
      name: "Dr. Yacine Rahmani",
      image: "https://i.pinimg.com/736x/65/56/67/655667061e228569f68a0a0a422f4ac9.jpg",
      spesialization: "General Practitioner",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'male',
      location:'Chlef',  
      age: 55
    },
    {
      id: "doc009",
      name: "Dr. Ines Haddad",
      image: "https://i.pinimg.com/236x/71/4e/dc/714edc8985d1ac01b7c6798aea675120.jpg",
      spesialization: "Psychiatrist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'female',
      location:'Chlef',
      age: 42
    },
    {
      id: "doc010",
      name: "Dr. Mourad Said",
      image: "https://i.pinimg.com/736x/4d/b5/9d/4db59d3f22ff424cf3e1cbd03c0fb20c.jpg",
      spesialization: "Urologist",
      structure: 'Residents',
      Email:'Anteuryounes12@gmail.com',
      password:'algeria',
      gender: 'male',
      location:'Chlef', 
      age: 37
    }
  ]

const Doctors = (props: Props) => {
  return (
    <div className='w-full lg:px-[150px] lg:pb-[50px]'id='doctors'>
        <div className='w-full flex justify-center items-center'>
           <Image src={ClinicLogo} alt='' className='lg:w-[120px] lg:w-[90px]'/>
           <h1 className='lg:text-3xl font-bold text-blue-500'>Our Doctors</h1>
        </div>
        <DisplayDoctors doctors={doctorsData} />
    </div>
  )
}

export default Doctors


const DisplayDoctors=({doctors}:{doctors:doctorType[]})=>{
    const display=useMemo(()=>{
        return doctors.map((doctor)=>{
            return <DoctorCard key={doctor.id} doctor={doctor} id={doctor.id} />
        })
    },[doctors])
    return <div className='grid grid-cols-4 gap-[30px] w-full mt-5'>
       {display}
    </div>
}


const DoctorCard=({doctor,id}:{doctor:doctorType,id:string})=>{
    return <div key={id} className=''>
        <img src={doctor.image} alt="" className='w-full lg:h-[160px]' />
        <div className="w-full flex justify-start items-center lg:gap-x-[8px] lg:mt-3 lg:px-[15px]">
            <h3 className='text-gray-700'>{doctor.spesialization}</h3>
            <button className='rounded-lg lg:px-[10px] lg:py-[2px] text-white bg-blue-500 flex justify-center items-center lg:gap-x-[3px]'>
                    <CiStar className='text-white text-lg'/>
                    <p className='text-lg text-white'>150</p>
            </button>
            </div>
            <h1 className='lg:text-lg  text-blue-500 lg:px-[15px] lg:pt-3'>{doctor.name}</h1>
            <div className='lg:px-[15px] flex flex-col justify-start items-start'>
                   <Information information={doctor.location}>
                    <CiLocationOn className='text-gray-800 text-lg'/>
                   </Information>
                   <Information information={doctor.structure}>
                     <FaRankingStar className='text-gray-800 text-lg' />
                   </Information>
            </div>
           
            <Link href={''} className=' w-full flex justify-center lg:mt-3 lg:py-[4px] text-blue-800 bg-blue-100 text-lg mx-auto'>Make appointment</Link>

         
            
        
    </div>
}

const Information=({children,information}:{children:ReactNode,information:string})=>{
    return <div className='flex justify-start items-center lg:gap-x-[5px]'>
           {children}
           <p className='text-gray-800 '>{information}</p>
    </div>
}

