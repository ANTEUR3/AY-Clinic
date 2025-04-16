import { createSlice } from "@reduxjs/toolkit";


 const ClinicServiceSlice=createSlice({
    name:'clinicService',
    initialState:{service:1},
    reducers:{
        updateService(state,action){
           state.service=action.payload
        }
    }
})
export const ServiceActions=ClinicServiceSlice.actions;
export default ClinicServiceSlice
