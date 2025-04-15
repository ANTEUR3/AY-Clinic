import {createSlice,configureStore} from '@reduxjs/toolkit'


  const doctorSlice=createSlice({
    name:'doctors',
    initialState:[],
    reducers:{
        incrementPatients(state,action){
            const doctor=state.find(doctore=>doctore.id==action.payload)
            doctor.patientNumber-=1;
        },
        decrementPatients(state,action){
            const doctor=state.find(doctore=>doctore.id==action.payload)
            doctor.patientNumber+=1;
        }
    }

})

export const doctorAcrtions=doctorSlice.actions
export default doctorSlice;


