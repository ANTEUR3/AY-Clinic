
import mongoose from 'mongoose'


const appointmentSchema = new mongoose.Schema({

    patient:{
        type: String,
        required:true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}
,
{timestamps:true}

)

const serviceSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    description: {
        type: String,
         required: true
    },
    logo:{
        type: String,
        required:true
    }
}
,
{timestamps:true}

)


const doctorSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    age: {
        type: Number,
         required: true
    },
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required:true
    },
    
}
,
{timestamps:true}

)

export const Appointment=mongoose.model('Appointment',appointmentSchema)
export const Service=mongoose.model('Service',serviceSchema)
export const Doctor=mongoose.model('Doctor',doctorSchema)


