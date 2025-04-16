"use client"
import React,{ReactNode} from 'react'
import Image from 'next/image'
import clinicLogo from '../../../../public/clinicLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import ServiceActions from '../../../redux/ClinicServiceSlice'
import ServicesDeatlis ,{Service} from './ServiceDeatlis'

const Services = ({children}: {children:ReactNode}) => {
  return (
    <div className='w-full lg:px-[70px]  lg:pt-[20px] '>
        <div className='flex justify-center items-center lg:gap-x-[10px] w-full'>
            <Image src={clinicLogo} alt='' className='lg:w-[60px] lg:h-[60px]' />
            <h1 className='font-bold lg:text-xl text-blue-700'>Our Services</h1>
        </div>
        <div className='flex justify-center items-center gap-x-[50px] lg:pt-[20px] w-[70%] mx-auto'>
        {children}
        </div>
        <ServicesDeatlis>
            <Service index={1} title='Dental center' description='Professional medical care tailored to your needs at our state-of-the-art clinic. Our experienced physicians and healthcare team provide comprehensive diagnostic services, personalized treatment plans, and ongoing care management. We offer same-day appointments, minimal wait times, and a comfortable healing environment. Our facility features the latest medical technology and follows strict safety protocols to ensure quality care. Whether you need routine check-ups, specialized consultations .' >
                <img src={'https://i.pinimg.com/736x/4a/7b/20/4a7b2012b63634d8a16310265e9deffe.jpg'} alt='' className='w-[29%] h-[200px] rounded-tl-xl rounded-bl-xl '/>
            </Service>
            <Service index={2} title='Pharmacy' description='Our in-house pharmacy provides convenient, one-stop care for all your medication needs. Staffed by experienced pharmacists who work directly with our medical team, we ensure accurate prescriptions, minimal wait times, and personalized medication counseling. We stock a comprehensive range of medications and offer competitive pricing, insurance billing, and refill reminders to support your complete healthcare journey.' >
                <img src={'https://i.pinimg.com/736x/42/6e/ee/426eeed29b8612307c15db28a900f782.jpg'} alt='' className='w-[29%] h-[200px] rounded-tl-xl rounded-bl-xl '/>
            </Service>
            <Service index={3} title='Medical Drip' description='Our clinic offers therapeutic IV drip treatments administered by certified medical professionals in a comfortable, clinical setting. These customized intravenous therapies deliver essential fluids, medications, vitamins, and minerals directly into your bloodstream for maximum absorption and effectiveness. Whether for hydration, immune support, recovery, or wellness optimization, our medical drips provide fast-acting relief and health benefits under careful medical supervision.' >
                <img src={'https://i.pinimg.com/736x/ec/3c/bb/ec3cbbfd3e698239b9b3114280f968e6.jpg'} alt='' className='w-[29%] h-[200px] rounded-tl-xl rounded-bl-xl '/>
            </Service>
            <Service index={4} title='Medical History' description='Our clinic provides comprehensive medical history management, safely storing and organizing your complete health records in one accessible location. Our trained staff compiles, updates, and securely maintains your medical timeline, including past diagnoses, treatments, medications, allergies, and family health patterns. This valuable service ensures your physicians have crucial information for accurate diagnoses and personalized care plans, improving treatment outcomes and continuity of care.' >
                <img src={'https://i.pinimg.com/736x/5b/af/e6/5bafe6e73ad17b87ef95d7e4fe9bb4f8.jpg'} alt='' className='w-[29%] h-[200px] rounded-tl-xl rounded-bl-xl '/>
            </Service>
            <Service index={5} title='Medical History' description='Our specialized lung illness service delivers comprehensive care for respiratory conditions through advanced diagnostics and personalized treatment plans. Our pulmonary specialists utilize state-of-the-art equipment for accurate assessment of asthma, COPD, pneumonia, and other respiratory disorders. We offer pulmonary function testing, breathing treatments, medication management, and rehabilitation programs to improve lung function and quality of life for patients with acute or chronic respiratory conditions.' >
                <img src={'https://i.pinimg.com/736x/11/11/e1/1111e17353ac4f7ddb629c789795061e.jpg'} alt='' className='w-[29%] h-[200px] rounded-tl-xl rounded-bl-xl '/>
            </Service>
        </ServicesDeatlis>

    </div>
  )
}

export default Services

export const ServiceItem=({children,information,index}:{children:ReactNode,information:string,index:number})=>{
    const service=useSelector((state:any)=>state.service.service)
    const dispatch=useDispatch();
    return <div className={`col-span-1 flex flex-col justify-center items-center lg:gap-y-[10px] rounded-tr-xl rounded-bl-xl   lg:pt-[15px] cursor-pointer ${service==index?'bg-blue-500 text-white':'text-blue-500'} lg:px-[15px] hover:bg-blue-200`} onClick={()=>{dispatch(ServiceActions.actions.updateService(index))}}>
             <div className={`${service==index?' text-white':'text-blue-500'} `}>{children}</div>
         <h1 className='font-bold '>{information}</h1>
    </div>
}