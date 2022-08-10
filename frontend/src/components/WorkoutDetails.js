const WorkoutDetails=({Workout})=>{
return(

    <div className="workout-details">
        <h4>{Workout.title}</h4>
        <p><strong>Load (kg):</strong>{Workout.load}</p>
        <p><strong>Reps:</strong>{Workout.reps}</p>
       <p>{Workout.createdAt}</p>





    </div>
)


}

export default WorkoutDetails;
