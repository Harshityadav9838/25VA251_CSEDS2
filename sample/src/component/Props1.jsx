import React from 'react'

function Props1() {
  
    const student=[];
    for (let x in student){
        <div style={{backgroundColor:"lightblue"}}> 
        <h2>{student[x].name}</h2>
        <h2>{student[x].rollno}</h2>
        <h3>{student[x].course}</h3>
        </div>
    }
  
}
return(
    <div style={{backgroundColor:"lightblue"}}>
        {student}
    </div>
)

export default Props