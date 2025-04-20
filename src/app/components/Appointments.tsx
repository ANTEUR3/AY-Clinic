"use client"
import Link from 'next/link'
import React, { ReactNode, useState,useContext,createContext, useEffect  } from 'react'
import { useDispatch, UseSelector } from 'react-redux'
import Image from 'next/image'
import AppImage from '../../../public/MedicinTools.png'
import { useSelector , UseDispatch } from 'react-redux'
import { PatientsActions } from '@/redux/PatientSlice'
const Appointments = ({visible,appointment}:{visible:boolean,appointment:any}) => {
const [part,setPart]=useState(0);

  return (
    <div className={`absolute top-0  w-[85%] mx-auto   rounded-xl border  flex justify-between items-start  z-10 bg-white left-[50%] -translate-x-[50%] top-[90px] transition-all duration-900 ${visible?'translate-y-0':'-translate-y-[600px]'}`}>
          <div className='px-[40px] bg-blue-500 py-2 absolute w-full rounded-tl-xl rounded-tr-xl flex justify-end items-center'>
             <button onClick={()=>{appointment(false)}} className='rounded-xl border-white text-white px-2 cursor-pointer hover:bg-blue-300 py-1 border border-white'>Cancel </button>
          </div>
          <LeftSide part={part} Next={setPart} appointment={appointment} >
             
          </LeftSide>
          <RightSide part={part}/>
    </div>
  )
}

export default Appointments

const RightSide=({part}:{part:number})=>{
    return <div className='w-1/2 flex flex-col justify-center items-center bg-transparent  '>
       
       
        
    </div>
}
const LeftSide=({part,Next,appointment}:{part:number,Next:any,appointment:any})=>{
   const [Name,setName]=useState<string | number >('');
   const [Adress,setAdress]=useState<string | number >('');
   const [Age,setAge]=useState<number | string>(0);
   const [doctor,setDoctor]=useState<string| number>(0);
   const [service,setService]=useState<string| number>(0);
   
   const Patients=useSelector((state:any)=>state.patients);
   const  dispatch=useDispatch();

   const conformAppointment=()=>{
        dispatch(PatientsActions.addPatient({Name,Age,Adress,doctor,service}))
        appointment(false)
   }

   useEffect(()=>{
    console.log(Patients)
   },[Patients])

    return <div className=' relative flex flex-col justify-start items-start lg:px-[30px] lg:pt-[70px] lg:pb-[30px] relative w-1/2  '>
               <h1 className='font-bold text-3xl mb-5  '>Book Appointment</h1>
                <div className='h-[100%] w-full'>
                    <InputContext.Provider value={{Name,Age,Adress,setName,setAdress,setAge,doctor,setDoctor,service,setService}}>
                       <Patient part={part} >
                          
                        </Patient>
                        <ServiceApp part={part} />
                    </InputContext.Provider>
                   
                </div>
                <div className=' w-full flex justify-between items-center lg:mt-[30px] '>
                      <button className={`px-3 py-1 border rounded-xl cursor-pointer hover:bg-gray-100 ${part==1?'block':'text-transparent border-0'}`} onClick={()=>{Next(0)}}>Cancel</button>
                      <button className={`px-5 py-1 border rounded-xl cursor-pointer bg-blue-500 hover:bg-blue-400 text-white border-white  ${part==0?'block':'hidden'}`} onClick={()=>{Next(1)}}>Next</button>
                      <button className={`px-5 py-1 border rounded-xl cursor-pointer bg-blue-500 hover:bg-blue-400 text-white border-white ${part==0?'hidden':'block'}  `} onClick={conformAppointment}>Confirm</button>
                </div>
                
    </div>
    
}

const Patient=({part}:{part:number})=>{
    const context=useInputContext();
         return <div className={`${part==0?'flex flex-col':'hidden'}`}>
                 <h2 className='font-semibold mb-5 text-xl'>Your Informations !</h2>
                 <div className='w-full flex flex-col gap-y-[3px] justify-start items-start mb-2'>
                       <label className='font-semibold' htmlFor="">Name</label>
                       <input type='text' onChange={(e)=>{context.setName(e.target.value)}}  placeholder='Your Name' className='w-full rounded-xl px-3 py-1 border border-gray-600'  />
               </div>
               <div className='w-full flex flex-col gap-y-[3px] justify-start items-start mb-2'>
                       <label className='font-semibold' htmlFor="">Adress</label>
                       <input onChange={(e)=>{context.setAdress(e.target.value)}} type='text' placeholder='SYour Adress' className='w-full rounded-xl px-3 py-1 border border-gray-600'  />
               </div>
               <div className='w-full flex flex-col gap-y-[3px] justify-start items-start mb-2'>
                       <label className='font-semibold' htmlFor="">Age</label>
                       <input onChange={(e)=>{context.setAge(e.target.value)}} type='number' placeholder='Age' className='w-full rounded-xl px-3 py-1 border border-gray-600'  />
               </div>
              
                 </div>
}




const ServiceApp=({part}:{part:number})=>{

    const context=useInputContext();

    return <div className={`${part==1?'block':'hidden'}`}>
              <h2 className='font-semibold mb-5'>Please select your service !</h2>
               <div className='w-full flex flex-col gap-y-[3px] justify-start items-start mb-2'>
                       <label className='font-semibold' htmlFor="">Service</label>
                       <input onChange={(e)=>{context.setService(e.target.value)}} type='text' placeholder='Select your service Ex:Dental service' className='w-full rounded-xl px-3 py-1 border border-gray-600'  />
               </div>
               <div className='w-full flex flex-col gap-y-[3px] justify-start items-start mb-2'>
                       <label className='font-semibold' htmlFor="">Doctor</label>
                       <input onChange={(e)=>{context.setDoctor(e.target.value)}} type='text' placeholder='Select your Doctore' className='w-full rounded-xl px-3 py-1 border border-gray-600'  />
               </div>
    </div>
}

 interface InputContextType{
    Name:String | number,
    Adress:String | number,
    Age:Number | string,
    setName:React.Dispatch<React.SetStateAction<string| number>>,
    setAge:React.Dispatch<React.SetStateAction<number | string>>,
    setAdress:React.Dispatch<React.SetStateAction<string | number>>,
    doctor:String | number,
    setDoctor:React.Dispatch<React.SetStateAction<string| number>>,
    service:String | number,
    setService:React.Dispatch<React.SetStateAction<string| number>>,


    
}

const InputContext=createContext<InputContextType | null>(null);

export const useInputContext=()=>{
    const context=useContext(InputContext);

    if(!context){
      throw new Error ('useItemContext must be used within a ItemContextProvider')
  }
  return context
}