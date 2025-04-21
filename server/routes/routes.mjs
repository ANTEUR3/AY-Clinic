import express from "express";
import { Doctor,Service,Appointment } from "../modules/modules.mjs";


export const DoctorRoutes=express.Router();

DoctorRoutes.get('/',async(req,res)=>{
     try {
        const doctors=await Doctor.find({}).populate('service')
        return res.status(200).send(doctors)

        
     }catch (error) {
             res.status(500).send({message:error.message})
     }
})

DoctorRoutes.delete('/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const doctor=await Doctor.findByIdAndDelete(id);
        if(!doctor){
            return res.status(404).send({message:`Doctore with id ${id} not found`})
        }
        return res.status(200).send({message:`Delete doctore with the id ${id} successfully`})
    }catch (error) {
            res.status(500).send({message:error.message})
    }
})

DoctorRoutes.post('/',async(req,res)=>{
    try {
        const newDoctor=req.params;
        const doctor=await Doctor.create(newDoctor);
        return res.status(200).send({message:`a new docor has been successfully creted `,doctor})
    }catch (error) {
            res.status(500).send({message:error.message})
    }
})