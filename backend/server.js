require('dotenv').config()


const express=require('express');
const mongoose=require('mongoose');

const workoutsRoutes=require('./routes/workouts');

//express app
const app=express();


app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path);
    console.log(req.method);
    next();


})

//routes

app.use('/api/workouts',workoutsRoutes);


//connect to database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{

//listen for requests
app.listen(process.env.PORT,()=>{
    console.log('connection to db and listening on port',process.env.PORT);

});


})
.catch((error)=>{
    console.log(error);


})

