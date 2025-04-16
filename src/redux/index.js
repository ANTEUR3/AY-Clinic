import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./doctorSlice";
import appointmentSlice from "./appointmentsSlice";
import navItemSlice from './navItemSlice'
import ClinicServiceSlice from './ClinicServiceSlice'

const store=configureStore({
    reducer:{
       doctors:doctorSlice.reducer,
       appointment:appointmentSlice.reducer,
       navItem:navItemSlice.reducer,
       service:ClinicServiceSlice.reducer
    }

})

export default store;