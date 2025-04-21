import express from 'express'
import http from 'http'
import mongoose from 'mongoose'

import {DoctorRoutes} from './routes/routes.mjs'
const app=express()
app.use(express.json())



const port=process.env.PORT

app.listen((port),()=>{
      console.log(`'hello from ${port}...`)
})

app.use('/api/doctors',DoctorRoutes)

const ClusterConnectionString=process.env.MongoConnectionString
mongoose.connect(ClusterConnectionString).then(()=>{
      console.log('nice connection with mongoDB')
})

