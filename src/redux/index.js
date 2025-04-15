import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./doctorSlice";
import appointmentSlice from "./appointmentsSlice";
import navItemSlice from './navItemSlice'

const store=configureStore({
    reducer:{
       doctors:doctorSlice.reducer,
       appointment:appointmentSlice.reducer,
       navItem:navItemSlice.reducer
    }

})

export default store;