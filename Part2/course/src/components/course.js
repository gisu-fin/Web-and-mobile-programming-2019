import React from 'react'

const Course = ({course}) => {
    return (
        <div>
        <Header course = {course}/>
        <Contents parts = {course.parts}/>
        <Total parts = {course.parts}/>
        </div>
    )    
}

const Header = ({course}) => {
  return(
    <h1>{course.name}</h1>
  )
}

const Contents = ({parts}) => {
  return(
    <div>
      {parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}
    </div>  
  )
}

const Total = ({parts}) => {
    return (
        <div>
            <p>
                Total {parts.reduce ((sum, {exercises}) => sum + exercises,0)} exercises.
            </p>
        </div>
    )
    }        


/*const Part = ({part}) => {
  return(
    <p>{part.name} {part.exercises}</p>
  )
}
*/



export default Course