const express=require('express');

const Workout=require('../models/WorkoutModel');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
    
}=require('../controllers/WorkoutController');
const { updateMany } = require('../models/WorkoutModel');

const router=express.Router();


//GET ALL workouts
router.get('/',getWorkouts);

//GET a single workout

router.get('/:id',getWorkout);

//POST a new workout

router.post('/',createWorkout);

//delete a workout

router.delete('/:id',deleteWorkout)
//update a workout

router.patch('/:id',updateWorkout);

module.exports=router;
